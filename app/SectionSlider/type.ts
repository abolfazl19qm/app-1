import {
    colorPalette,
    sidebarTextarea,
    sidebarTextInput,
    sidebarUploadImage,
} from "@components/sidebar/components/settings";

export interface SectionSliderType {
    img: sidebarUploadImage;
    price1: sidebarTextInput;
    price2: sidebarTextInput;
    price3: sidebarTextInput;
    price4: sidebarTextInput;
    title1: sidebarTextInput;
    title2: sidebarTextInput;
    title3: sidebarTextInput;
    title4: sidebarTextInput;
    volume1: sidebarTextInput;
    volume2: sidebarTextInput;
    volume3: sidebarTextInput;
    volume4: sidebarTextInput;
    btnText: sidebarTextInput;
    description1: sidebarTextarea;
    description2: sidebarTextarea;
    description3: sidebarTextarea;
    description4: sidebarTextarea;
    buttonColor: colorPalette;
    bgColor: colorPalette;
    priceColor: colorPalette;
    titleColor: colorPalette;
    descriptionColor: colorPalette;
}
