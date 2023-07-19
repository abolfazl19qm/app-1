import {
    createSettingColorPalette,
    createSettingSidebarUploadImage,
    createSidebarTextInput,
    createSettingSidebarTextarea
} from "@components/sidebar/components/settings";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import RenderComponent from "registerComponent/RenderComponent";
import {ISectionComment} from ".";
import {SectionCommentType} from "./type";

export const SettingsSection = (): JSX.Element => {
    const {set, get} = UseChangeSetting<ISectionComment>();
    const settingsSection: SectionCommentType = {
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
            label: "عنوان کامنت ",
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

        comment: createSettingSidebarTextarea({
            id: "comment",
            label: translator("کامنت"),
            className: "mt-7",
            defaultValue: get.comment,
            textStyle: get.textStyle,
            onChangeTextStyle(value: {
                Bold: boolean;
                Italic: boolean;
                Justify: boolean;
            }) {
                set({textStyle: value});
            },
            onChangeText(val: string) {
                set({comment: val});
            },
        }),
        commentColor: createSettingColorPalette({
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
    return <RenderComponent component={settingsSection}/>
}

