import {
    colorPalette,
    sidebarTextInput,
    sidebarUploadImage,
} from "@components/sidebar/components/settings";

export interface SectionEventType {
    eventTitle: sidebarTextInput;
    timerTitle: sidebarTextInput;
    btnText: sidebarTextInput;
    btnColor: colorPalette;
    bgColor: colorPalette;
    image: sidebarUploadImage;
    days: sidebarTextInput;
    hours: sidebarTextInput;
    minutes: sidebarTextInput;
    seconds: sidebarTextInput;
}
