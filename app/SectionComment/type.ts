import {
    colorPalette,
    sidebarTextarea,
    sidebarTextInput,
    sidebarUploadImage,
} from "@components/sidebar/components/settings";

export interface SectionCommentType {
    title: sidebarTextInput;
    comment: sidebarTextarea;
    image: sidebarUploadImage;
    bgColor: colorPalette;
}