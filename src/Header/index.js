import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Settings } from "@material-ui/icons";
import { number } from "prop-types";

import { HeaderLink, HeaderTitle } from "./useStyles";
import { homePath, settingsPath, basketPath } from "../App/routes";

export default function Header({ shoppingCartItemsCount }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <HeaderTitle to={homePath}>
          <Typography variant="h6">Chi-Chi Sushis</Typography>
        </HeaderTitle>
        <HeaderLink to={settingsPath}>
          <IconButton aria-label="settings" color="inherit">
            <Settings />
          </IconButton>
        </HeaderLink>
        <HeaderLink to={basketPath}>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={shoppingCartItemsCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </HeaderLink>
      </Toolbar>
    </AppBar>
  );
}

Header.protoTypes = {
  shoppingCartItemsCount: number,
};

Header.defaultProps = {
  shoppingCartItemsCount: 0,
};
