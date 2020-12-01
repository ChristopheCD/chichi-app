import { ThemeProvider } from "@material-ui/core/styles";

import "./styles.css";
import SushiList from "../SushiList";
import Header from "../Header";
import theme from "./theme";

const sushis = [
  {
    id: 1,
    title: "Maki",
    description: "poisson, riz",
  },
  {
    id: 2,
    title: "Temaki",
    description: "poisson, riz",
  },
  {
    id: 3,
    title: "Urumaki",
    description: "poisson, riz",
  },
  {
    id: 4,
    title: "Sashimi",
    description: "poisson, riz",
  },
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header shoppingCartItemsCount={42} />
      <SushiList sushis={sushis} />
    </ThemeProvider>
  );
}
