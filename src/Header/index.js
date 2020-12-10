import { connect } from "react-redux";

import Header from "./components";

const mapStateToProps = (state) => ({
  shoppingCartItemsCount: state.shoppingCart.length,
});

export default connect(mapStateToProps)(Header);
