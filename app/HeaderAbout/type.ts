import {
    colorPalette,
    sidebarTextarea,
} from "@components/sidebar/components/settings";

export interface HeaderAboutType {
    title: sidebarTextarea;
    titleColor: colorPalette;
    bgColor: colorPalette | null;

}