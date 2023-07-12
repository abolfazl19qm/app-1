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
            className: "mt-5",
            onChange(image: string[]) {
                set({image: image});
            },
        }),
        eventTitle: createSidebarTextInput({
            id: "eventTitle",
            label: "عنوان رویداد",
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
            className: "mt-5",
            defaultValue: get.timerTitle,
            onChange(val: string) {
                set({timerTitle: val});
            },
        }),
        btnText: createSidebarTextInput({
            id: "btnText",
            label: "عنوان دکمه",
            placeholder: "",
            className: "mt-5",
            defaultValue: get.btnText,
            onChange(val: string) {
                set({btnText: val});
            },
        }),
        btnColor: createSettingColorPalette({
            id: "btnColor",
            label: translator("رنگ دکمه"),
            className: "mt-5",
            value: get.bgColor,
            onClick(colorName: string) {
                set({bgColor: colorName});
            },
        }),
        bgColor: createSettingColorPalette({
            id: "bgColor",
            label: translator("textWithImage.bgColor"),
            className: "mt-5",
            value: get.bgColor,
            onClick(colorName: string) {
                set({bgColor: colorName});
            },
        }),
        days: createSidebarTextInput({
            id: "days",
            label: "تایمر",
            placeholder: "روز",
            className: "mt-5",
            defaultValue: get.days,
            onChange(val: number) {
                set({days: val});
            },
        }),
        hours: createSidebarTextInput({
            id: "hours",
            label: "",
            placeholder: "ساعت",
            className: "mt-2",
            defaultValue: get.hours,
            onChange(val: number) {
                set({hours: val});
            },
        }),
        minutes: createSidebarTextInput({
            id: "minutes",
            label: "",
            placeholder: "دقیقه",
            className: "mt-2",
            defaultValue: get.minutes,
            onChange(val: number) {
                set({minutes: val});
            },
        }),
        seconds: createSidebarTextInput({
            id: "seconds",
            label: "",
            placeholder: "ثانیه",
            className: "mt-2",
            defaultValue: get.seconds,
            onChange(val: number) {
                set({seconds: val});
            },
        }),


    }
    return <RenderComponent component={settingsSectionEvent}/>
}

