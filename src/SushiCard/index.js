import { connect } from "react-redux";

import SushiCard from "./component";
import { addToShoppingCart } from "../shoppingCart/actions";

const mapDispatchToProps = {
  addToShoppingCart,
};

export default connect(null, mapDispatchToProps)(SushiCard);
