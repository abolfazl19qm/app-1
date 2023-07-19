import { SidebarSettingAtom } from "@atoms/sidebarSetting";
import { createSettingColorPalette } from "@components/sidebar/components/SidebarColorPalette/setting";
import Label from "@components/sidebar/components/SidebarRadioButtonsBox/Label";
import { createSettingRadioButtons } from "@components/sidebar/components/SidebarRadioButtonsBox/setting";
import { SettingsSlideShowImages } from "@components/sidebar/components/SidebarSlideshowImagesSettings";
import { createSettingUploadImageWithDetails } from "@components/sidebar/components/UploadImagesWithDetails/settings";
import { ISlideShow } from "@components/siteUi/SlideShow/index";
import { SlideShowType } from "@components/siteUi/SlideShow/type";
import convertNumbersToFA from "@global/convertNumbersToFA";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import { useSetRecoilState } from "recoil";
import RenderComponent from "registerComponent/RenderComponent";
import { SettingsImagesLink } from "@components/sidebar/saharkhiz/SidebarBannerImagesSettings";

export const SettingsSlideShow = (): JSX.Element => {
  const { set, get } = UseChangeSetting<ISlideShow>();
  const setSidebarSettingAtom = useSetRecoilState(SidebarSettingAtom);

  const SettingSlideShow: SlideShowType = {
    slideshowHeight: createSettingRadioButtons({
      id: "rd1",
      title: translator("slideShow.height"),
      inline: false,
      itemsCols: 3,
      className: "mt-6",
      data: [
        {
          id: "#4",
          label: translator("slideShow.height.small"),
          value: "60vh",
        },
        {
          id: "#5",
          label: translator("slideShow.height.medium"),
          value: "70vh",
        },
        {
          id: "#6",
          label: translator("slideShow.height.big"),
          value: "80vh",
        },
        {
          id: "#7",
          label: translator("slideShow.height.full"),
          value: "calc(100vh - 95px)",
        },
      ],
      defaultValue: get.slideshowHeight,
      onChange(val) {
        set({
          slideshowHeight:
            val === "60vh"
              ? "60vh"
              : val === "70vh"
              ? "70vh"
              : val === "80vh"
              ? "80vh"
              : "calc(100vh - 95px)",
        });
      },
    }),
    imageHeight: createSettingRadioButtons({
      id: "rd2",
      title: translator("slideShow.heightLeveling"),
      inline: true,
      itemsCols: 1,
      className: "mt-6",
      data: [
        {
          id: "#8",
          label: translator("slideShow.heightLeveling.active"),
          value: "cover",
        },
        {
          id: "#9",
          label: translator("slideShow.heightLeveling.inactive"),
          value: "contain",
        },
      ],
      defaultValue: get.imageHeight,
      onChange(val) {
        set({ imageHeight: val === "cover" ? "cover" : "contain" });
      },
    }),
    slideshowSpeed: createSettingRadioButtons({
      id: "rd3",
      title: translator("slideShow.speed"),
      inline: false,
      itemsCols: 2,
      className: "mt-6",
      data: [
        {
          id: "#10",
          label: Label({
            label: translator("slideShow.speed.slow"),
            description:
              "(" +
              convertNumbersToFA(7) +
              " " +
              translator("slideShow.speed.second") +
              ")",
          }),
          value: "7000",
        },
        {
          id: "#11",
          label: Label({
            label: translator("slideShow.speed.medium"),
            description:
              "(" +
              convertNumbersToFA(5) +
              " " +
              translator("slideShow.speed.second") +
              ")",
          }),
          value: "5000",
        },
        {
          id: "#12",
          label: Label({
            label: translator("slideShow.speed.fast"),
            description:
              "(" +
              convertNumbersToFA(3) +
              " " +
              translator("slideShow.speed.second") +
              ")",
          }),
          value: "3000",
        },
        {
          id: "#13",
          label: Label({
            label: translator("slideShow.speed.veryFast"),
            description:
              "(" +
              convertNumbersToFA(2) +
              " " +
              translator("slideShow.speed.second") +
              ")",
          }),
          value: "2000",
        },
      ],
      defaultValue: get.slideshowSpeed,
      onChange: (val) => {
        set({
          slideshowSpeed:
            val === "2000"
              ? "2000"
              : val === "3000"
              ? "3000"
              : val === "5000"
              ? "5000"
              : "7000",
        });
        console.debug(val, " val");
      },
    }),
    // autoScroll: createSettingRadioButtons({
    //   id: "rd4",
    //   title: translator("slideShow.autoRotate"),
    //   inline: true,
    //   itemsCols: 1,
    //   className: "mt-6",
    //   data: [
    //     {
    //       id: "#14",
    //       label: translator("slideShow.autoRotate.active"),
    //       value: "true",
    //     },
    //     {
    //       id: "#15",
    //       label: translator("slideShow.autoRotate.inactive"),
    //       value: "false",
    //     },
    //   ],
    //   defaultValue: get.autoScroll,
    //   onChange(val) {
    //     set({ autoScroll: val === "true" ? "true" : "false" });
    //   },
    // }),
    backgroundColor: createSettingColorPalette({
      id: "cp1",
      label: translator("slideShow.backgroundColor"),
      value: get.backgroundColor,
      onClick(colorName: string) {
        set({ backgroundColor: colorName });
      },
      className: "mt-9",
    }),
    textColor: createSettingColorPalette({
      id: "textColor",
      label: translator("slideShow.textColor"),
      value: get.textColor,
      onClick(colorName: string) {
        set({ textColor: colorName });
      },
      className: "mt-9",
    }),
    buttonColor: createSettingColorPalette({
      id: "cp1",
      label: translator("slideShow.buttonColor"),
      value: get.buttonColor,
      onClick(colorName: string) {
        set({ buttonColor: colorName });
      },
      className: "mt-9",
    }),
    textButtonColor: createSettingColorPalette({
      id: "textButtonColor",
      label: translator("slideShow.btnTextColor"),
      value: get.textButtonColor,
      className: "mt-9",
      onClick: (colorName: string) => {
        set({ textButtonColor: colorName });
      },
    }),

    slideshowImages: createSettingUploadImageWithDetails({
      label:
        translator("saharkhiz.uploadImage.slideshow.desktop") +
        "\n" +
        translator("saharkhiz.simpleSlideshow.uploadImage.description.desktop"),
      description: translator(
        "saharkhiz.simpleSlideshow.uploadImage.description.desktop"
      ),
      handleImagesSettings(index: number): void {
        setSidebarSettingAtom({
          SideBarSettingComponent: SettingsSlideShowImages("slideshowImages"),
          prevTitle: translator("saharkhiz.bannerWithSlideshow.addLink"),
          index,
        });
      },
      id: "slideImages",
      noImageUploadedLabel: translator("saharkhiz.uploadImage.slideshow"),
      defaultValue: get.slideshowImages,
      className: "mt-7",
      onChange(images: any[]) {
        set({ slideshowImages: images });
      },
    }),
    smallSlideshowImages: createSettingUploadImageWithDetails({
      label:
        translator("saharkhiz.uploadImage.slideshow.mobile") +
        "\n" +
        translator("saharkhiz.simpleSlideshow.uploadImage.description.mobile"),
      description: translator(
        "saharkhiz.simpleSlideshow.uploadImage.description.mobile"
      ),
      handleImagesSettings(index: number): void {
        setSidebarSettingAtom({
          SideBarSettingComponent: SettingsSlideShowImages(
            "smallSlideshowImages"
          ),
          prevTitle: translator("saharkhiz.bannerWithSlideshow.addLink"),
          index,
        });
      },

      id: "smallSlideImages",
      noImageUploadedLabel: translator("saharkhiz.uploadImage.slideshow"),
      defaultValue: get.smallSlideshowImages,
      className: "mt-7",
      onChange(smallImages: any[]) {
        set({ smallSlideshowImages: smallImages });
      },
    }),
  };

  return <RenderComponent component={SettingSlideShow} />;
};
