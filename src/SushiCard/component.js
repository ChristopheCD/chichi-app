import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { func, number, string } from "prop-types";

import useStyles from "./useStyles";
import PlaceholderCardMedia from "../PlaceholderCardMedia";
import Counter from "../Counter";
import AddShoppingCartButton from "../AddShoppingCartButton";
import { useCounter } from "react-use";
import { addToShoppingCart } from "../shoppingCart/actions";

export default function SushiCard({
  id,
  title,
  description,
  image,
  isLoading,
  addToShoppingCart,
}) {
  const classes = useStyles();

  const [counter, { dec, inc }] = useCounter(1, 10, 1);
  const onDec = () => dec();
  const onInc = () => inc();

  return (
    <Card className={classes.root}>
      {image ? (
        <CardMedia
          className={classes.media}
          image={image}
          title={image ? title : "image not found"}
        />
      ) : (
        <PlaceholderCardMedia className={classes.media} />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Counter onDec={onDec} onInc={onInc} value={counter} />
        <AddShoppingCartButton
          onClick={() => addToShoppingCart({ id, counter })}
        />
      </CardActions>
    </Card>
  );
}

export const types = {
  id: number.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  image: string,
  addToShoppingCart: func,
};

SushiCard.propTypes = types;

SushiCard.defaultProps = {
  image: "",
  addToShoppingCart: Function.prototype,
};
