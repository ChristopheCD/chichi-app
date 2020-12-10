import { Button, Typography } from "@material-ui/core";
import Basket, { basketTypes } from "../Basket";
import Screen from "../Screen";

export default function BasketScreen({ basket }) {
  return (
    <Screen>
      <Typography variant="h1">basket</Typography>
      <Basket basket={basket}></Basket>
      {basket.length > 0 && (
        <Button variant="contained" color="secondary">
          Commander
        </Button>
      )}
    </Screen>
  );
}

BasketScreen.propTypes = basketTypes;

BasketScreen.defaultProps = {
  basket: [],
};
