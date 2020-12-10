import { ADD_TO_SHOPPING_CART } from "./actions";

const initialState = [];

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_SHOPPING_CART:
      return [...state, action.payload];

    default:
      return state;
  }
}
