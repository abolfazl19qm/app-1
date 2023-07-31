import {
    colorPalette,
    sidebarTextarea,
    sidebarTextInput,
} from "@components/sidebar/components/settings";

export interface SectionAbout2Type {
    title1: sidebarTextInput;
    description1: sidebarTextarea;
    title2: sidebarTextInput;
    description2: sidebarTextarea;
    title3: sidebarTextInput;
    description3: sidebarTextarea;
    title4: sidebarTextInput;
    description4: sidebarTextarea;
    titleColor: colorPalette;
    descriptionColor: colorPalette;
    bgColor: colorPalette;
}