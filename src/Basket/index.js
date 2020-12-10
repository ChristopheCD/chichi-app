import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { arrayOf, number, shape, string } from "prop-types";
import Price from "../Price";
import useStyles from "./useStyles";

export default function Basket({ basket }) {
  const classes = useStyles();
  return (
    <Paper className={classes.wrapper}>
      {basket.length > 0 ? (
        <List>
          {basket.map(({ id, title, count, price }) => {
            const secondaryText = [<Price price={price} />, `(x${count})`];

            return (
              <ListItem key={id}>
                <ListItemText primary={title} secondary={secondaryText} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Typography>Panier Vide</Typography>
      )}
    </Paper>
  );
}

// Basket.propTypes = {
export const basketTypes = arrayOf(
  shape({
    id: number.isRequired,
    title: string.isRequired,
    count: number.isRequired,
    price: number.isRequired,
  })
);

Basket.propTypes = {
  basket: basketTypes,
};

Basket.defaultProps = {
  basket: [],
};
