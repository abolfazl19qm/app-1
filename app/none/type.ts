import { colorPalette } from "@components/sidebar/components/SidebarColorPalette/setting";
import { radioButton } from "@components/sidebar/components/SidebarRadioButtonsBox/setting";
import { sidebarUploadImage } from "@components/sidebar/components/SidebarUploadImage/settings";
import {uploadImageWithDetails} from "@components/sidebar/components/UploadImagesWithDetails/settings";

export interface SlideShowType {
  slideshowHeight: radioButton;
  imageHeight: radioButton;
  slideshowSpeed: radioButton;
  // autoScroll: radioButton;
  backgroundColor: colorPalette;
  // images: sidebarUploadImage;
  buttonColor: colorPalette;
  textColor:colorPalette;
  textButtonColor:colorPalette;
  slideshowImages: uploadImageWithDetails;
  smallSlideshowImages: uploadImageWithDetails;



}
