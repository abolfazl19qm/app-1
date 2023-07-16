
import {
    colorPalette,
    sidebarTextarea,
    sidebarTextInput,
    sidebarUploadImage,
} from "@components/sidebar/components/settings";

export interface SectionInfoType {
    image: sidebarUploadImage;
    phoneNumber: sidebarTextInput;
    email: sidebarTextInput;
    title: sidebarTextInput;
    subTitle: sidebarTextarea;
    titleAddress: sidebarTextInput;
    address1: sidebarTextarea;
    address2: sidebarTextarea;
    nr1: sidebarTextInput;
    nr2: sidebarTextInput;
    bgColor: colorPalette;
}
