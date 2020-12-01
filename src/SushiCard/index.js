import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { string } from "prop-types";

import useStyles from "./useStyles";
import PlaceholderCardMedia from "../PlaceholderCardMedia";

export default function SushiCard({ title, description, image }) {
  const classes = useStyles();

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
      <CardActions>
        <IconButton
          className={classes.addToShoppingCart}
          aria-label="add shoping cart"
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}

SushiCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  image: string,
};

SushiCard.defaultProps = {
  image: null,
};
