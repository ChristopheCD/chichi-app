import dice from "./dice";
import { sushiTypes } from "./sushis";

const createBasketItem = (id) => ({
  id,
  title: `${sushiTypes[id % sushiTypes.length]} ${id}`,
  count: dice(10),
  price: dice(4),
});

export const listOfBaskets = new Array(8)
  .fill(null)
  .map((_basketItem, id) => createBasketItem(id));

export const listOfOneBasketItem = [createBasketItem(1)];
