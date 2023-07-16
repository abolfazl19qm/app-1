import {
    colorPalette,
    sidebarTextarea,
    sidebarTextInput,
    sidebarUploadImage,
} from "@components/sidebar/components/settings";

export interface FooterType {
    titleFirst: sidebarTextInput;
    subTitleFirst1: sidebarTextInput;
    subTitleFirst2: sidebarTextInput;
    subTitleFirst3: sidebarTextInput;
    subTitleFirst4: sidebarTextInput;
    subTitleFirst5: sidebarTextInput;
    subTitleFirst6: sidebarTextInput;
    titleSecond: sidebarTextInput;
    subTitleSecond1: sidebarTextInput;
    subTitleSecond2: sidebarTextInput;
    subTitleSecond3: sidebarTextInput;
    subTitleSecond4: sidebarTextInput;
    subTitleSecond5: sidebarTextInput;
    titleThird: sidebarTextInput;
    subTitleThird1: sidebarTextInput;
    subTitleThird2: sidebarTextInput;
    subTitleThird3: sidebarTextInput;
    titleFourth: sidebarTextInput;
    subTitleFourth: sidebarTextarea;
    imagesTitleFourth: sidebarUploadImage;
    bgColor: colorPalette;
}