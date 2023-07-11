import {
  createSettingColorPalette,
  createSettingRadioButtons,
  createSettingSidebarTextarea,
  createSettingSidebarUploadImage,
  createSidebarTextInput,
} from "@components/sidebar/components/settings";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import RenderComponent from "registerComponent/RenderComponent";
import { ITextWithImage2 } from ".";
import { TextWithImage2Type } from "./type";

export const SettingsTextWithImage2 = (): JSX.Element => {
  const { set, get } = UseChangeSetting<ITextWithImage2>();

  const settingTextWithImage2: TextWithImage2Type = {
    textTitle: createSidebarTextInput({
      id: "textTitle",
      label: translator("textWithImage.text.title"),
      placeholder: translator("textWithImage.text.placeholder"),
      className: "mt-7",
      defaultValue: get.textTitle,
      onChange(val: string) {
        set({ textTitle: val });
      },
    }),
    text: createSettingSidebarTextarea({
      id: "text",
      label: translator("textWithImage.text"),
      className: "mt-7",
      defaultValue: get.text,
      textStyle: get.textStyle,
      onChangeTextStyle(value: {
        Bold: boolean;
        Italic: boolean;
        Justify: boolean;
      }) {
        set({ textStyle: value });
      },
      onChangeText(val: string) {
        set({ text: val });
      },
    }),
    direction: createSettingRadioButtons({
      id: "displayStatus",
      title: translator("editHeaderMessage.displayStatus"),
      itemsCols: 1,
      className: "mt-6",
      defaultValue: get.direction,
      inline: false,
      data: [
        {
          id: "#active",
          label: translator("editHeaderMessage.displayStatus.ltr"),
          value: "ltr",
        },
        {
          id: "#inactive",
          label: translator("editHeaderMessage.displayStatus.rtl"),
          value: "rtl",
        },
        {
          id: "#tb",
          label: translator("editHeaderMessage.displayStatus.tb"),
          value: "tb",
        },
        {
          id: "#bt",
          label: translator("editHeaderMessage.displayStatus.bt"),
          value: "bt",
        },
      ],
      onChange: (value) => {
        set({ direction: value });
      },
    }),
    moreLink: createSidebarTextInput({
      id: "moreLink",
      label: translator("textWithImage.text.moreLink"),
      placeholder: translator("textWithImage.text.placeholder"),
      className: "mt-7",
      defaultValue: get.moreLink,
      onChange(val: string) {
        set({ moreLink: val });
      },
    }),
    bgColor: createSettingColorPalette({
      id: "bgColor",
      label: translator("textWithImage.bgColor"),
      className: "mt-7",
      value: get.bgColor,
      onClick(colorName: string) {
        set({ bgColor: colorName });
      },
    }),
    images: createSettingSidebarUploadImage({
      id: "images",
      noImageUploadedLabel: translator("uploadImage.input"),
      requiredImgNumber: 3,
      maxImgNumber: 3,
      defaultValue: get.images,
      className: "mt-7",
      onChange(images: string[]) {
        set({ images: images });
      },
    }),
    buttonColor: createSettingColorPalette({
      id: "bgColor",
      label: translator("buttonColor.text"),
      className: "mt-7",
      value: get.buttonColor,
      onClick(colorName: string) {
        set({ buttonColor: colorName });
      },
    }),
    textColor: createSettingColorPalette({
      id: "textColor",
      label: translator("buttonColor.dtext"),
      className: "mt-7",
      value: get.textColor,
      onClick(colorName: string) {
        set({ textColor: colorName });
      },
    }),
  };

  return <RenderComponent component={settingTextWithImage2} />;
};
