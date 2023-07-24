import {
  colorPalette,
  radioButton,
  sidebarTextarea,
  sidebarTextInput,
  sidebarToggleButtons,
} from "@components/sidebar/components/settings";
import { sidebarToggleTabsBackup } from "@components/sidebar/components/SidebarToggleTabsBackup/settings";

export interface SiteHeaderType {
  headerToggleTabs: sidebarToggleTabsBackup;
  headerMessage: sidebarTextarea | null;
  displayStatus: radioButton | null;
  getAgencyLink: sidebarTextInput | null;
  messageSize: sidebarToggleButtons | null;
  bgColor: colorPalette | null;
  mainColor: colorPalette | null;
}
