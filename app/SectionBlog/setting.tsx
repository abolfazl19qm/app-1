import {
    createSettingColorPalette,
} from "@components/sidebar/components/settings";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import RenderComponent from "registerComponent/RenderComponent";
import {ISectionBlog} from ".";
import {SectionBlogType} from "./type";

export const SettingsSectionBlog = (): JSX.Element => {
    const {set, get} = UseChangeSetting<ISectionBlog>();
    const settingsSectionBlog: SectionBlogType = {
        timeColor: createSettingColorPalette({
            id: "timeColor",
            label: translator("رنگ تاریخ "),
            className: "mt-5",
            value: get.titleColor,
            onClick(colorName: string) {
                set({titleColor: colorName});
            },
        }),
        descriptionColor: createSettingColorPalette({
            id: "descriptionColor",
            label: translator("رنگ توضیحات"),
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
    return <RenderComponent component={settingsSectionBlog}/>
}

