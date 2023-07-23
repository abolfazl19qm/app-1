import {
    createSettingColorPalette,
    createSettingSidebarUploadImage,
    createSidebarTextInput,
    createSettingSidebarTextarea
} from "@components/sidebar/components/settings";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import RenderComponent from "registerComponent/RenderComponent";
import {ISectionProduct} from ".";
import {SectionProductType} from "./type";

export const SettingsSectionProduct = (): JSX.Element => {
    const {set, get} = UseChangeSetting<ISectionProduct>();
    const settingsSectionProduct: SectionProductType = {
        btnText: createSidebarTextInput({
            id: "btnText",
            label: "عنوان دکمه ",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.btnText,
            onChange(val: string) {
                set({btnText: val});
            },
        }),
        btnColor: createSettingColorPalette({
            id: "titleColor",
            label: translator("رنگ کمه"),
            className: "mt-5",
            value: get.titleColor,
            onClick(colorName: string) {
                set({titleColor: colorName});
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
        captionColor: createSettingColorPalette({
            id: "commentColor",
            label: translator("رنگ متن "),
            className: "mt-5",
            value: get.commentColor,
            onClick(colorName: string) {
                set({commentColor: colorName});
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
    return <RenderComponent component={settingsSectionProduct}/>
}

