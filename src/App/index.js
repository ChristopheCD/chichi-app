import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles.css";
import SushiListScreen from "../SushiListScreen";
import theme from "./theme";
import SettingsScreen from "../SettingsScreen";
import routes from "./routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Header shoppingCartItemsCount={42} /> */}
      <BrowserRouter>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} exact>
              {component}
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
