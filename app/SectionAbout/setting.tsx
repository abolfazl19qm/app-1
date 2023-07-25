import {
    createSettingColorPalette,
    createSettingSidebarTextarea,
    createSettingSidebarUploadImage,
    createSidebarTextInput
} from "@components/sidebar/components/settings";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import RenderComponent from "registerComponent/RenderComponent";
import {ISectionAbout} from ".";
import {SectionAboutType} from "./type";

export const SettingsSectionAbout = (): JSX.Element => {
    const {set, get} = UseChangeSetting<ISectionAbout>();
    const settingsSectionAbout: SectionAboutType = {
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
        title: createSidebarTextInput({
            id: "title",
            label: "عنوان  ",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.title,
            onChange(val: string) {
                set({title: val});
            },
        }),
        titleColor: createSettingColorPalette({
            id: "titleColor",
            label: translator("رنگ عنوان "),
            className: "mt-5",
            value: get.titleColor,
            onClick(colorName: string) {
                set({titleColor: colorName});
            },
        }),

        description1: createSettingSidebarTextarea({
            id: "description1",
            label: translator("توضیحات"),
            className: "mt-7",
            defaultValue: get.description1,
            textStyle: get.textStyle,
            onChangeTextStyle(value: {
                Bold: boolean;
                Italic: boolean;
                Justify: boolean;
            }) {
                set({textStyle: value});
            },
            onChangeText(val: string) {
                set({description1: val});
            },
        }),
        description2: createSettingSidebarTextarea({
            id: "description2",
            label: translator("دیگر توضیحات"),
            className: "mt-5",
            defaultValue: get.description2,
            textStyle: get.textStyle,
            onChangeTextStyle(value: {
                Bold: boolean;
                Italic: boolean;
                Justify: boolean;
            }) {
                set({textStyle: value});
            },
            onChangeText(val: string) {
                set({description2: val});
            },
        }),
        descriptionColor: createSettingColorPalette({
            id: "descriptionColor",
            label: translator("رنگ متن "),
            className: "mt-5",
            value: get.descriptionColor,
            onClick(colorName: string) {
                set({descriptionColor: colorName});
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
    return <RenderComponent component={settingsSectionAbout}/>
}
