import SettingsScreen from "../SettingsScreen";
import SushiListScreen from "../SushiListScreen";

export const homePath = "/";
export const settingsPath = "/prefs";

const routes = [
  { path: homePath, component: <SushiListScreen /> },
  { path: settingsPath, component: <SettingsScreen /> },
];

export default routes;
