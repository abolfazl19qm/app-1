import {
  createSettingColorPalette,
  createSettingRadioButtons,
  createSettingSidebarTextarea,
  createSettingSidebarToggleButtons,
  createSidebarTextInput,
} from "@components/sidebar/components/settings";
import { createSettingSidebarToggleTabsBackup } from "@components/sidebar/components/SidebarToggleTabsBackup/settings";
import translator from "@translator";
import UseChangeSetting from "hook/useChangeSetting";
import RenderComponent from "registerComponent/RenderComponent";
import { ISiteHeaderWh } from ".";
import { EditHeaderMenuType } from "./EditHeaderMenu/type";
import { SiteHeaderType } from "./type";

export const SettingsSiteHeaderWh = (): JSX.Element => {
  const { set, get } = UseChangeSetting<ISiteHeaderWh>();

  const settingEditHeaderMenu: EditHeaderMenuType = {
    
    bgColor: createSettingColorPalette({
      id: "bgColor",
      label: translator("editHeaderMessage.bg"),
      className: "mt-7",
      value: get.bgColor,
      onClick(colorName: string) {
        set({ bgColor: colorName });
      },
    }),
    title1: createSidebarTextInput({
      id: "title1",
      label: translator("editHeaderMenu.title"),
      placeholder: translator("editHeaderMenu.placeholder"),
      className: "mt-7",
      defaultValue: get.title1,
      onChange(val: string) {
        set({ title1: val });
      },
    }),
    link1: createSidebarTextInput({
      id: "link1",
      label: translator("editHeaderMenu.link"),
      placeholder: translator("editHeaderMenu.placeholder"),
      className: "mt-3 border-b border-white-xs pb-7",
      defaultValue: get.link1,
      type: "url",
      onChange(val: string) {
        set({ link1: val });
      },
    }),
    title2: createSidebarTextInput({
      id: "title2",
      label: translator("editHeaderMenu.title"),
      placeholder: translator("editHeaderMenu.placeholder"),
      className: "mt-7",
      defaultValue: get.title2,
      onChange(val: string) {
        set({ title2: val });
      },
    }),
    link2: createSidebarTextInput({
      id: "link2",
      label: translator("editHeaderMenu.link"),
      placeholder: translator("footer.text.placeholder"),
      className: "mt-3 border-b border-white-xs pb-7",
      defaultValue: get.link2,
      type: "url",
      onChange(val: string) {
        set({ link2: val });
      },
    }),
    title3: createSidebarTextInput({
      id: "title3",
      label: translator("editHeaderMenu.title"),
      placeholder: translator("footer.text.placeholder"),
      className: "mt-7",
      defaultValue: get.title3,
      onChange(val: string) {
        set({ title3: val });
      },
    }),
    link3: createSidebarTextInput({
      id: "link3",
      label: translator("editHeaderMenu.link"),
      placeholder: translator("footer.text.placeholder"),
      className: "mt-3 border-b border-white-xs pb-7",
      defaultValue: get.link3,
      type: "url",
      onChange(val: string) {
        set({ link3: val });
      },
    }),
    title4: createSidebarTextInput({
      id: "title4",
      label: translator("editHeaderMenu.title"),
      placeholder: translator("footer.text.placeholder"),
      className: "mt-7",
      defaultValue: get.title4,
      onChange(val: string) {
        set({ title4: val });
      },
    }),
    link4: createSidebarTextInput({
      id: "link4",
      label: translator("editHeaderMenu.link"),
      placeholder: translator("footer.text.placeholder"),
      className: "mt-3 border-b border-white-xs pb-7",
      defaultValue: get.link4,
      type: "url",
      onChange(val: string) {
        set({ link4: val });
      },
    }),
    title5: createSidebarTextInput({
      id: "title5",
      label: translator("editHeaderMenu.title"),
      placeholder: translator("footer.text.placeholder"),
      className: "mt-7",
      defaultValue: get.title5,
      onChange(val: string) {
        set({ title5: val });
      },
    }),
    link5: createSidebarTextInput({
      id: "link5",
      label: translator("editHeaderMenu.link"),
      placeholder: translator("editHeaderMenu.placeholder"),
      className: "mt-3 border-b border-white-xs pb-7",
      defaultValue: get.link5,
      type: "url",
      onChange(val: string) {
        set({ link5: val });
      },
    }),
  };


  return <RenderComponent component={settingEditHeaderMenu} />;
};
