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
        subTitleFirst1: createSidebarTextInput({
            id: "subTitleFirst1",
            label: "",
            placeholder: "1",
            className: "mt-2",
            defaultValue: get.subTitleFirst1,
            onChange(val: string) {
                set({subTitleFirst1: val});
            },
        }),
        subTitleFirst2: createSidebarTextInput({
            id: "subTitleFirst2",
            label: "",
            placeholder: "2",
            className: "mt-2",
            defaultValue: get.subTitleFirst2,
            onChange(val: string) {
                set({subTitleFirst2: val});
            },
        }),
        subTitleFirst3: createSidebarTextInput({
            id: "subTitleFirst3",
            label: "",
            placeholder: "3",
            className: "mt-2",
            defaultValue: get.subTitleFirst3,
            onChange(val: string) {
                set({subTitleFirst3: val});
            },
        }),
        subTitleFirst4: createSidebarTextInput({
            id: "subTitleFirst4",
            label: "",
            placeholder: "4",
            className: "mt-2",
            defaultValue: get.subTitleFirst4,
            onChange(val: string) {
                set({subTitleFirst4: val});
            },
        }),
        subTitleFirst5: createSidebarTextInput({
            id: "subTitleFirst5",
            label: "",
            placeholder: "5",
            className: "mt-2",
            defaultValue: get.subTitleFirst5,
            onChange(val: string) {
                set({subTitleFirst5: val});
            },
        }),
        subTitleFirst6: createSidebarTextInput({
            id: "subTitleFirst6",
            label: "",
            placeholder: "6",
            className: "mt-2",
            defaultValue: get.subTitleFirst6,
            onChange(val: string) {
                set({subTitleFirst6: val});
            },
        }),
        titleSecond: createSidebarTextInput({
            id: "titleSecond",
            label: " عنوان دوم ",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.titleSecond,
            onChange(val: string) {
                set({titleSecond: val});
            },
        }),
        subTitleSecond1: createSidebarTextInput({
            id: "subTitleSecond1",
            label: "",
            placeholder: "1",
            className: "mt-2",
            defaultValue: get.subTitleSecond1,
            onChange(val: string) {
                set({subTitleSecond1: val});
            },
        }),
        subTitleSecond2: createSidebarTextInput({
            id: "subTitleSecond2",
            label: "",
            placeholder: "2",
            className: "mt-2",
            defaultValue: get.subTitleSecond2,
            onChange(val: string) {
                set({subTitleSecond2: val});
            },
        }),
        subTitleSecond3: createSidebarTextInput({
            id: "subTitleSecond3",
            label: "",
            placeholder: "3",
            className: "mt-2",
            defaultValue: get.subTitleSecond3,
            onChange(val: string) {
                set({subTitleSecond3: val});
            },
        }),
        subTitleSecond4: createSidebarTextInput({
            id: "subTitleSecond4",
            label: "",
            placeholder: "4",
            className: "mt-2",
            defaultValue: get.subTitleSecond4,
            onChange(val: string) {
                set({subTitleSecond4: val});
            },
        }),
        subTitleSecond5: createSidebarTextInput({
            id: "subTitleSecond5",
            label: "",
            placeholder: "5",
            className: "mt-2",
            defaultValue: get.subTitleSecond5,
            onChange(val: string) {
                set({subTitleSecond5: val});
            },
        }),
        titleThird: createSidebarTextInput({
            id: "titleThird",
            label: " عنوان سوم ",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.titleThird,
            onChange(val: string) {
                set({titleThird: val});
            },

        }),
        subTitleThird1: createSidebarTextInput({
            id: "subTitleThird1",
            label: "",
            placeholder: "1",
            className: "mt-2",
            defaultValue: get.subTitleThird1,
            onChange(val: string) {
                set({subTitleThird1: val});
            },
        }),
        subTitleThird2: createSidebarTextInput({
            id: "subTitleThird2",
            label: "",
            placeholder: "2",
            className: "mt-2",
            defaultValue: get.subTitleThird2,
            onChange(val: string) {
                set({subTitleThird2: val});
            },
        }),
        subTitleThird3: createSidebarTextInput({
            id: "subTitleThird3",
            label: "",
            placeholder: "3",
            className: "mt-2",
            defaultValue: get.subTitleThird3,
            onChange(val: string) {
                set({subTitleThird3: val});
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
        titleColor: createSettingColorPalette({
            id: "titleColor",
            label: translator("رنگ عنوان ها"),
            className: "mt-7",
            value: get.bgColor,
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
    return <RenderComponent component={settingsFooter}/>
}

