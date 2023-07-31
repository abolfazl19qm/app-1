import {
    createSettingColorPalette,
    createSidebarTextInput,
    createSettingSidebarTextarea
} from "@components/sidebar/components/settings";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import RenderComponent from "registerComponent/RenderComponent";
import {ISectionAbout2} from ".";
import {SectionAbout2Type} from "./type";

export const SettingsSectionAbout2 = (): JSX.Element => {
    const {set, get} = UseChangeSetting<ISectionAbout2>();
    const settingsSectionAbout2: SectionAbout2Type = {
        title1: createSidebarTextInput({
            id: "title1",
            label: "عنوان 1 ",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.title1,
            onChange(val: string) {
                set({title1: val});
            },
        }),
        description1: createSettingSidebarTextarea({
            id: "description1",
            label: translator("توضیحات 1"),
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
            label: "عنوان 2 ",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.title2,
            onChange(val: string) {
                set({title2: val});
            },
        }),
        description2: createSettingSidebarTextarea({
            id: "description2",
            label: translator("توضیحات 2"),
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
            label: "عنوان 3 ",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.title3,
            onChange(val: string) {
                set({title3: val});
            },
        }),
        description3: createSettingSidebarTextarea({
            id: "description3",
            label: translator("توضیحات 3"),
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
        title4: createSidebarTextInput({
            id: "title4",
            label: "عنوان 4 ",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.title4,
            onChange(val: string) {
                set({title4: val});
            },
        }),
        description4: createSettingSidebarTextarea({
            id: "description4",
            label: translator("توضیحات 3"),
            className: "mt-7",
            defaultValue: get.description4,
            textStyle: get.textStyle,
            onChangeTextStyle(value: {
                Bold: boolean;
                Italic: boolean;
                Justify: boolean;
            }) {
                set({textStyle: value});
            },
            onChangeText(val: string) {
                set({description4: val});
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
    return <RenderComponent component={settingsSectionAbout2}/>
}

