import {
    createSettingColorPalette,
    createSettingSidebarUploadImage,
    createSidebarTextInput,
    createSettingSidebarTextarea
} from "@components/sidebar/components/settings";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import RenderComponent from "registerComponent/RenderComponent";
import {ISectionInfo} from ".";
import {SectionInfoType} from "./type";

export const SettingsSectionInfo = (): JSX.Element => {
    const {set, get} = UseChangeSetting<ISectionInfo>();
    const settingsSectionInfo: SectionInfoType = {
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
            label: "عنوان",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.title,
            onChange(val: string) {
                set({title: val});
            },
        }),
        email: createSidebarTextInput({
            id: "email",
            label: "",
            placeholder: "ایمیل",
            className: "mt-2",
            defaultValue: get.email,
            onChange(val: string) {
                set({email: val});
            },
        }),
        phoneNumber: createSidebarTextInput({
            id: "phoneNumber",
            label: "",
            placeholder: "شماره تماس",
            className: "mt-2",
            defaultValue: get.phoneNumber,
            onChange(val: string) {
                set({phoneNumber: val});
            },
        }),

        subTitle: createSettingSidebarTextarea({
            id: "subTitle",
            label: translator("توضیحات عنوان"),
            className: "mt-2",
            defaultValue: get.subTitle,
            textStyle: get.textStyle,
            onChangeTextStyle(value: {
                Bold: boolean;
                Italic: boolean;
                Justify: boolean;
            }) {
                set({textStyle: value});
            },
            onChangeText(val: string) {
                set({subTitle: val});
            },
        }),
        titleAddress: createSidebarTextInput({
            id: "titleAddress",
            label: "عنوان ادرس",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.titleAddress,
            onChange(val: string) {
                set({titleAddress: val});
            },
        }),
        address1: createSettingSidebarTextarea({
            id: "address1",
            label: translator("ادرس اول"),
            className: "mt-2",
            defaultValue: get.address1,
            textStyle: get.textStyle,
            onChangeTextStyle(value: {
                Bold: boolean;
                Italic: boolean;
                Justify: boolean;
            }) {
                set({textStyle: value});
            },
            onChangeText(val: string) {
                set({address1: val});
            },
        }),
        address2: createSettingSidebarTextarea({
            id: "address2",
            label: translator("ادرس دوم"),
            className: "mt-2",
            defaultValue: get.address2,
            textStyle: get.textStyle,
            onChangeTextStyle(value: {
                Bold: boolean;
                Italic: boolean;
                Justify: boolean;
            }) {
                set({textStyle: value});
            },
            onChangeText(val: string) {
                set({address2: val});
            },
        }),
        nr1: createSidebarTextInput({
            id: "nr1",
            label: "NR",
            placeholder: "NR-1",
            className: "mt-7",
            defaultValue: get.nr1,
            onChange(val: string) {
                set({nr1: val});
            },
        }),
        nr2: createSidebarTextInput({
            id: "nr2",
            label: "",
            placeholder: "NR-2",
            className: "mt-1",
            defaultValue: get.nr2,
            onChange(val: string) {
                set({nr2: val});
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
    return <RenderComponent component={settingsSectionInfo}/>
}

