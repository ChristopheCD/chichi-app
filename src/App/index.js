import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles.css";
import theme from "./theme";
import routes from "./routes";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
