import {
    colorPalette,
    sidebarTextarea,
    sidebarTextInput,
    sidebarUploadImage,
} from "@components/sidebar/components/settings";

export interface SectionServicesType {
    title1: sidebarTextInput;
    title2: sidebarTextInput;
    title3: sidebarTextInput;
    description1: sidebarTextarea;
    description2: sidebarTextarea;
    description3: sidebarTextarea;
    bgColor: colorPalette;
    titleColor: colorPalette;
    descriptionColor: colorPalette;
    imageCenter: sidebarUploadImage;
    icon: sidebarUploadImage;
}
