import { ThemeProvider } from "@material-ui/core/styles";

import "./styles.css";
import SushiListWithFilter from "../SushiListWithFilter";
import Header from "../Header";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header shoppingCartItemsCount={42} />
      <SushiListWithFilter />
    </ThemeProvider>
  );
}
