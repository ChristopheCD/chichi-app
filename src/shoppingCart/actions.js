export const ADD_TO_SHOPPING_CART = "shopping-cart/add";

export function addToShoppingCart({ id, count }) {
  return {
    type: ADD_TO_SHOPPING_CART,
    payload: {
      id,
      count,
    },
  };
}
