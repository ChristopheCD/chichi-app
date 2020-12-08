import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import { Settings } from "@material-ui/icons";
import { number } from "prop-types";

import useStyles from "./useStyles";
import { homePath, settingsPath } from "../App/routes";

export default function Header({ shoppingCartItemsCount }) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to={homePath} className={classes.title}>
          <Typography variant="h6">Chi-Chi Sushis</Typography>
        </Link>
        <Link to={settingsPath}>
          <IconButton aria-label="settings" color="inherit">
            <Settings />
          </IconButton>
        </Link>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={shoppingCartItemsCount} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
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
