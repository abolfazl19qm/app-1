import {
    createSettingColorPalette,
    createSettingSidebarUploadImage,
    createSidebarTextInput,
    createSettingSidebarTextarea
} from "@components/sidebar/components/settings";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import RenderComponent from "registerComponent/RenderComponent";
import {IFooter} from ".";
import {FooterType} from "./type";

export const SettingsFooter = (): JSX.Element => {
    const {set, get} = UseChangeSetting<IFooter>();
    const settingsFooter: FooterType = {
        titleFirst: createSidebarTextInput({
            id: "titleFirst",
            label: "عنوان اول ",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.titleFirst,
            onChange(val: string) {
                set({titleFirst: val});
            },
        }),






        titleFourth: createSidebarTextInput({
            id: "titleFourth",
            label: " عنوان چهارم ",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.titleFourth,
            onChange(val: string) {
                set({titleFourth: val});
            },
        }),
        subTitleFourth: createSettingSidebarTextarea({
            id: "subTitleFourth",
            label: translator("توضحات عنوان چهارم"),
            className: "mt-2",
            defaultValue: get.subTitleFourth,
            textStyle: get.textStyle,
            onChangeTextStyle(value: {
                Bold: boolean;
                Italic: boolean;
                Justify: boolean;
            }) {
                set({textStyle: value});
            },
            onChangeText(val: string) {
                set({subTitleFourth: val});
            },
        }),
        imagesTitleFourth: createSettingSidebarUploadImage({
            id: "imagesTitleFourth",
            noImageUploadedLabel: translator("uploadImage.input"),
            requiredImgNumber: 3,
            maxImgNumber: 3,
            defaultValue: get.imagesTitleFourth,
            className: "mt-2",
            onChange(image: string[]) {
                set({imagesTitleFourth: image});
            },
        }),
        bgColor: createSettingColorPalette({
            id: "bgColor",
            label: translator("textWithImage.bgColor"),
            className: "mt-7",
            value: get.bgColor,
            onClick(colorName: string) {
                set({bgColor: colorName});
            },
        })
    }
    return <RenderComponent component={settingsFooter}/>
}

