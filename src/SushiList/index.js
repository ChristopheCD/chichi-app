import { arrayOf, shape } from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import SushiCard, { types as sushiCardTypes } from "../SushiCard";
import useStyles from "./useStyles";

export default function SushiList({ sushis }) {
  const classes = useStyles();

  if (sushis.length === 0)
    return <Typography>aucun élément à afficher</Typography>;

  return (
    <Grid container spacing={4} className={classes.sushiList}>
      {sushis.map((sushi) => (
        <Grid item xs={3} key={sushi.id}>
          <SushiCard key={sushi.id} {...sushi} />
        </Grid>
      ))}
    </Grid>
  );
}

SushiList.propTypes = {
  sushis: arrayOf(shape(sushiCardTypes)),
};

SushiList.defaultProps = {
  sushis: [],
};
