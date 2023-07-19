import {
    colorPalette,
    sidebarTextarea,
    sidebarTextInput,
    sidebarUploadImage,
} from "@components/sidebar/components/settings";

export interface SectionCommentType {
    title: sidebarTextInput;
    titleColor: colorPalette;
    comment: sidebarTextarea;
    commentColor: colorPalette;
    image: sidebarUploadImage;
    bgColor: colorPalette;
}