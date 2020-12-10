import { IconButton, Typography } from "@material-ui/core";
import { Remove, Add } from "@material-ui/icons";
import { func, number } from "prop-types";

export default function Counter({ value, onDec, onInc }) {
  return (
    <>
      <IconButton aria-label="decrement" onClick={onDec}>
        <Remove />
      </IconButton>
      <Typography display="inline">{value}</Typography>
      <IconButton aria-label="increment" onClick={onInc}>
        <Add />
      </IconButton>
    </>
  );
}

Counter.propTypes = {
  value: number,
  onDec: func,
  onInc: func,
};

Counter.defaultProps = {
  value: 1,
  onDec: Function.prototype,
  onInc: Function.prototype,
};
