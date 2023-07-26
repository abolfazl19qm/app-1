import {
    colorPalette,
    sidebarTextarea,
    sidebarUploadImage,
} from "@components/sidebar/components/settings";

export interface HeaderAboutType {
    image: sidebarUploadImage;
    logo: sidebarUploadImage;
    title: sidebarTextarea;
    titleColor: colorPalette;
    bgColor: colorPalette | null;

}