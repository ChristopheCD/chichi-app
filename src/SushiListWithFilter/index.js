import { TextField } from "@material-ui/core";
import { arrayOf, shape } from "prop-types";

import useStyles from "./useStyles";
import ShushiList from "../SushiList";
import { types as sushiCardTypes } from "../SushiCard";
import useFilteredSushis from "../useFilteredSushis";

export default function SushiListWithFilter({ sushis }) {
  const classes = useStyles();

  const [search, filteredSushis, { filterSushis }] = useFilteredSushis(sushis);
  return (
    <form autoComplete="off" noValidate className={classes.form}>
      <TextField
        label="Search"
        type="search"
        variant="outlined"
        className={classes.search}
        value={search}
        onChange={filterSushis}
      />
      <ShushiList sushis={filteredSushis} />
    </form>
  );
}

SushiListWithFilter.propTypes = {
  sushis: arrayOf(shape(sushiCardTypes)),
};

SushiListWithFilter.defaultProps = {
  sushis: [],
};
