import { connect } from "react-redux";

import Header from "./components";
import { totalByCount } from "../selectors";

const mapStateToProps = (state) => ({
  shoppingCartItemsCount: totalByCount(state.shoppingCart, "count"),
});

export default connect(mapStateToProps)(Header);
