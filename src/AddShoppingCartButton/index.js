import { IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { func } from "prop-types";
import useStyles from "./useStyles";

export default function AddShoppingCartButton({ onClick }) {
  const classes = useStyles();

  return (
    <IconButton
      className={classes.addToShoppingCart}
      aria-label="add shoping cart"
      onClick={onClick}
    >
      <AddShoppingCart />
    </IconButton>
  );
}

AddShoppingCartButton.propTypes = {
  onClick: func,
};

AddShoppingCartButton.defaultProps = {
  onClick: Function.prototype,
};
