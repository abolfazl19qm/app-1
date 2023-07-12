import {
    createSettingColorPalette,
    createSettingSidebarUploadImage,
    createSidebarTextInput,
} from "@components/sidebar/components/settings";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import RenderComponent from "registerComponent/RenderComponent";
import {ISectionEvent} from ".";
import {SectionEventType} from "./type";

export const SettingsSectionEvent = (): JSX.Element => {
    const {set, get} = UseChangeSetting<ISectionEvent>();
    const settingsSectionEvent: SectionEventType = {
        image: createSettingSidebarUploadImage({
            id: "image",
            noImageUploadedLabel: translator("uploadImage.input"),
            requiredImgNumber: 1,
            maxImgNumber: 1,
            defaultValue: get.image,
            className: "mt-7",
            onChange(image: string[]) {
                set({image: image});
            },
        }),
        eventTitle: createSidebarTextInput({
            id: "eventTitle",
            label: "عنوان اول",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.eventTitle,
            onChange(val: string) {
                set({eventTitle: val});
            },
        }),
        timerTitle: createSidebarTextInput({
            id: "timerTitle",
            label: "عنوان تایمر",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.timerTitle,
            onChange(val: string) {
                set({timerTitle: val});
            },
        }),
        btnText: createSidebarTextInput({
            id: "btnText",
            label: "عنوان دکمه",
            placeholder: "",
            className: "mt-7",
            defaultValue: get.btnText,
            onChange(val: string) {
                set({btnText: val});
            },
        }),
        btnColor: createSettingColorPalette({
            id: "btnColor",
            label: translator("رنگ دکمه"),
            className: "mt-7",
            value: get.bgColor,
            onClick(colorName: string) {
                set({bgColor: colorName});
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
    return <RenderComponent component={settingsSectionEvent}/>
}

