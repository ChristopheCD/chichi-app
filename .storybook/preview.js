import theme from "../src/App/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import "../src/App/styles.css";
import { Fullscreen } from "@material-ui/icons";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: Fullscreen,
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
