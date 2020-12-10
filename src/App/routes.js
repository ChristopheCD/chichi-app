import BasketScreen from "../BasketScreen";
import SettingsScreen from "../SettingsScreen";
import SushiListScreen from "../SushiListScreen";
import SushiScreen from "../SushiScreen";

export const homePath = "/";
export const settingsPath = "/prefs";
export const basketPath = "/basket";
export const sushiPath = "/sushis/:id";

const routes = [
  { path: homePath, component: <SushiListScreen /> },
  { path: settingsPath, component: <SettingsScreen /> },
  { path: basketPath, component: <BasketScreen /> },
  { path: sushiPath, component: <SushiScreen /> },
];

export default routes;
