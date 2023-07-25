import {
    colorPalette,
    sidebarTextarea,
    sidebarTextInput,
    sidebarUploadImage,
} from "@components/sidebar/components/settings";

export interface SectionAboutType {
    image: sidebarUploadImage;
    title: sidebarTextInput;
    titleColor: colorPalette;
    description1: sidebarTextarea;
    description2: sidebarTextarea;
    descriptionColor: colorPalette;
    bgColor: colorPalette;
}