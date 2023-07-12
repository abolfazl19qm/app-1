import {
    createSettingColorPalette,
    createSettingSidebarUploadImage,
    createSidebarTextInput,
    createSettingSidebarTextarea
} from "@components/sidebar/components/settings";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import RenderComponent from "registerComponent/RenderComponent";
import {ISectionServices} from ".";
import {SectionServicesType} from "./type";

export const SettingsSection = (): JSX.Element => {
    const {set, get} = UseChangeSetting<ISectionServices>();
    const settingsSectionServices: SectionServicesType = {
        imageCenter: createSettingSidebarUploadImage({
            id: "topImage",
            noImageUploadedLabel: translator("uploadImage.input"),
            requiredImgNumber: 1,
            maxImgNumber: 1,
            defaultValue: get.imageCenter,
            className: "mt-7",
            onChange(image: string[]) {
                set({imageCenter: image});
            },
        }),
        title1: createSidebarTextInput({
            id: "title1",
            label: "عنوان اول",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.title1,
            onChange(val: string) {
                set({title1: val});
            },
        }),
        description1: createSettingSidebarTextarea({
            id: "description1",
            label: translator("textWithImage.text"),
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
        title2: createSidebarTextInput({
            id: "title2",
            label: "عنوان دوم",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.title2,
            onChange(val: string) {
                set({title2: val});
            },
        }),
        description2: createSettingSidebarTextarea({
            id: "description2",
            label: translator("textWithImage.text"),
            className: "mt-7",
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
        title3: createSidebarTextInput({
            id: "title3",
            label: "عنوان سوم",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.title3,
            onChange(val: string) {
                set({title3: val});
            },
        }),
        description3: createSettingSidebarTextarea({
            id: "description3",
            label: translator("textWithImage.text"),
            className: "mt-7",
            defaultValue: get.description3,
            textStyle: get.textStyle,
            onChangeTextStyle(value: {
                Bold: boolean;
                Italic: boolean;
                Justify: boolean;
            }) {
                set({textStyle: value});
            },
            onChangeText(val: string) {
                set({description3: val});
            },
        }),
        icon: createSettingSidebarUploadImage({
            id: "icon",
            noImageUploadedLabel: translator("uploadImage.input"),
            requiredImgNumber: 3,
            maxImgNumber: 3,
            defaultValue: get.icon,
            className: "mt-7",
            onChange(images: string[]) {
                set({icon: images});
            },
        }),
        titleColor: createSettingColorPalette({
            id: "titleColor",
            label: translator("رنگ عنوان"),
            className: "mt-7",
            value: get.titleColor,
            onClick(colorName: string) {
                set({titleColor: colorName});
            },
        }),
        descriptionColor: createSettingColorPalette({
            id: "descriptionColor",
            label: translator("رنگ توضیحات"),
            className: "mt-7",
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
    return <RenderComponent component={settingsSectionServices}/>
}

