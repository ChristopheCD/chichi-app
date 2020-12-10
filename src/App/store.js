import { createStore, combineReducers } from "redux";

import shoppingCartReducer from "../shoppingCart/reducer";

export default createStore(
  combineReducers({ shoppingCart: shoppingCartReducer })
);
