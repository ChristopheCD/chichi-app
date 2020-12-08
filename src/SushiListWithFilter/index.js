import { CircularProgress, Grid, TextField } from "@material-ui/core";
import { arrayOf, shape } from "prop-types";

import useStyles from "./useStyles";
import ShushiList from "../SushiList";
import { types as sushiCardTypes } from "../SushiCard";
import useSuhis from "../useSushis";

export default function SushiListWithFilter({ sushis }) {
  const classes = useStyles();

  const { isLoading, data: remoteSushis, search, onSearchChange } = useSuhis();

  return (
    <form autoComplete="off" noValidate className={classes.form}>
      <TextField
        label="Search"
        type="search"
        variant="outlined"
        className={classes.search}
        value={search}
        onChange={onSearchChange}
      />

      <ShushiList sushis={remoteSushis} isLoading={isLoading} />
    </form>
  );
}

SushiListWithFilter.propTypes = {
  sushis: arrayOf(shape(sushiCardTypes)),
};

SushiListWithFilter.defaultProps = {
  sushis: [],
};
