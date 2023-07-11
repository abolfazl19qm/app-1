import {
  colorPalette,
  radioButton,
  sidebarTextarea,
  sidebarTextInput,
  sidebarUploadImage,
} from "@components/sidebar/components/settings";

export interface TextWithImage2Type {
  textTitle: sidebarTextInput;
  text: sidebarTextarea;
  moreLink: sidebarTextInput;
  bgColor: colorPalette;
  textColor: colorPalette;
  images: sidebarUploadImage;
  buttonColor: colorPalette;
  direction: radioButton;
}
