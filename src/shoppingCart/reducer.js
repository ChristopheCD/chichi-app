import { ADD_TO_SHOPPING_CART } from "./actions";

const initialState = [];

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_SHOPPING_CART:
      const { id, count } = action.payload;

      let basket;

      const basketItemIndex = state.findIndex((item) => item.sushiId === id);

      if (basketItemIndex === -1) {
        basket = [...state, { id, count }];
      } else {
        basket = [...state];
        basket[basketItemIndex].count += count;
      }

      return basket;

    default:
      return state;
  }
}
