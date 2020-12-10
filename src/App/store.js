import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import shoppingCartReducer from "../shoppingCart/reducer";

export default createStore(
  combineReducers({ shoppingCart: shoppingCartReducer }),
  devToolsEnhancer()
);
