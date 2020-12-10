import BasketScreen from "../BasketScreen";
import SettingsScreen from "../SettingsScreen";
import SushiListScreen from "../SushiListScreen";

export const homePath = "/";
export const settingsPath = "/prefs";
export const basketPath = "/basket";

const routes = [
  { path: homePath, component: <SushiListScreen /> },
  { path: settingsPath, component: <SettingsScreen /> },
  { path: basketPath, component: <BasketScreen /> },
];

export default routes;
