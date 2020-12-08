import { arrayOf, shape } from "prop-types";
import { Typography } from "@material-ui/core";
import SushiCard, { types as sushiCardTypes } from "../SushiCard";

export default function SushiList({ sushis }) {
  if (sushis.length === 0)
    return <Typography>aucun élément à afficher</Typography>;

  return (
    <>
      {sushis.map((sushi) => (
        <SushiCard key={sushi.id} {...sushi} />
      ))}
    </>
  );
}

SushiList.propTypes = {
  sushis: arrayOf(shape(sushiCardTypes)),
};

SushiList.defaultProps = {
  sushis: [],
};
