import {
    createSettingColorPalette,
    createSettingSidebarUploadImage,
    createSidebarTextInput,
    createSettingSidebarTextarea
} from "@components/sidebar/components/settings";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import RenderComponent from "registerComponent/RenderComponent";
import {ISectionSlider} from ".";
import {SectionSliderType} from "./type";

export const SettingsSectionSlider = (): JSX.Element => {
    const {set, get} = UseChangeSetting<ISectionSlider>();
    const settingsSectionSlider: SectionSliderType = {
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
        volume1: createSidebarTextInput({
            id: "volume1",
            label: "",
            placeholder: "ساب عنوان",
            className: "mt-2",
            defaultValue: get.title1,
            onChange(val: string) {
                set({title1: val});
            },
        }),
        description1: createSettingSidebarTextarea({
            id: "description1",
            label: translator("textWithImage.text"),
            className: "mt-2",
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
        price1: createSidebarTextInput({
            id: "price1",
            label: "",
            placeholder: "قیمت",
            className: "mt-2",
            defaultValue: get.price1,
            onChange(val: string) {
                set({price1: val});
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
        volume2: createSidebarTextInput({
            id: "volume2",
            label: "",
            placeholder: "ساب عنوان",
            className: "mt-2",
            defaultValue: get.volume2,
            onChange(val: string) {
                set({volume2: val});
            },
        }),
        description2: createSettingSidebarTextarea({
            id: "description2",
            label: translator("textWithImage.text"),
            className: "mt-2",
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
        price2: createSidebarTextInput({
            id: "price2",
            label: "",
            placeholder: "قیمت",
            className: "mt-2",
            defaultValue: get.price2,
            onChange(val: string) {
                set({price2: val});
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
        volume3: createSidebarTextInput({
            id: "volume3",
            label: "",
            placeholder: "ساب عنوان",
            className: "mt-2",
            defaultValue: get.volume3,
            onChange(val: string) {
                set({volume3: val});
            },
        }),
        description3: createSettingSidebarTextarea({
            id: "description3",
            label: translator("textWithImage.text"),
            className: "mt-2",
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
        price3: createSidebarTextInput({
            id: "price3",
            label: "",
            placeholder: "قیمت",
            className: "mt-2",
            defaultValue: get.price3,
            onChange(val: string) {
                set({price3: val});
            },
        }),
        title4: createSidebarTextInput({
            id: "title4",
            label: "عنوان سوم",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.title4,
            onChange(val: string) {
                set({title4: val});
            },
        }),
        volume4: createSidebarTextInput({
            id: "volume4",
            label: "",
            placeholder: "ساب عنوان",
            className: "mt-2",
            defaultValue: get.volume4,
            onChange(val: string) {
                set({volume4: val});
            },
        }),
        description4: createSettingSidebarTextarea({
            id: "description4",
            label: translator("textWithImage.text"),
            className: "mt-2",
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
        price4: createSidebarTextInput({
            id: "price4",
            label: "",
            placeholder: "قیمت",
            className: "mt-2",
            defaultValue: get.price4,
            onChange(val: string) {
                set({price4: val});
            },
        }),
        img: createSettingSidebarUploadImage({
            id: "img",
            noImageUploadedLabel: translator("uploadImage.input"),
            requiredImgNumber: 4,
            maxImgNumber: 4,
            defaultValue: get.img,
            className: "mt-7",
            onChange(image: string[]) {
                set({img: image});
            },
        }),
        btnText: createSidebarTextInput({
            id: "btnText",
            label: "",
            placeholder: "متن دکمه ها",
            className: "mt-2",
            defaultValue: get.btnText,
            onChange(val: string) {
                set({btnText: val});
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
        buttonColor: createSettingColorPalette({
            id: "descriptionColor",
            label: translator("رنگ دمکمه ها"),
            className: "mt-7",
            value: get.buttonColor,
            onClick(colorName: string) {
                set({buttonColor: colorName});
            },
        }),
        priceColor: createSettingColorPalette({
            id: "priceColor",
            label: translator("رنگ قیمت"),
            className: "mt-7",
            value: get.priceColor,
            onClick(colorName: string) {
                set({priceColor: colorName});
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
    return <RenderComponent component={settingsSectionSlider}/>
}

