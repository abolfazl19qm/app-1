import {
    createSettingColorPalette,
    createSettingSidebarTextarea,
    createSettingSidebarUploadImage
} from "@components/sidebar/components/settings";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import RenderComponent from "registerComponent/RenderComponent";
import {IHeaderAbout} from ".";
import {HeaderAboutType} from "./type";

export const SettingsHeader = (): JSX.Element => {
    const {set, get} = UseChangeSetting<IHeaderAbout>();
    const settingsHeader: HeaderAboutType = {
        image: createSettingSidebarUploadImage({
            id: "Image",
            noImageUploadedLabel: translator("uploadImage.input"),
            requiredImgNumber: 1,
            maxImgNumber: 1,
            defaultValue: get.image,
            className: "mt-7",
            onChange(image: string[]) {
                set({image: image});
            },
        }),
        logo: createSettingSidebarUploadImage({
            id: "logo",
            noImageUploadedLabel: translator("uploadImage.input"),
            requiredImgNumber: 1,
            maxImgNumber: 1,
            defaultValue: get.logo,
            className: "mt-7",
            onChange(image: string[]) {
                set({logo: image});
            },
        }),

        title: createSettingSidebarTextarea({
            id: "title",
            label: translator("عنوان"),
            className: "mt-7",
            defaultValue: get.title,
            textStyle: get.textStyle,
            onChangeTextStyle(value: {
                Bold: boolean;
                Italic: boolean;
                Justify: boolean;
            }) {
                set({textStyle: value});
            },
            onChangeText(val: string) {
                set({title: val});
            },
        }),

        titleColor: createSettingColorPalette({
            id: "titleColor",
            label: translator("رنگ عنوان"),
            className: "mt-5",
            value: get.titleColor,
            onClick(colorName: string) {
                set({titleColor: colorName});
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
    return <RenderComponent component={settingsHeader}/>
}

