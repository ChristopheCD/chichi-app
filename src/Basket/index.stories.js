import Basket from ".";
import { listOfBaskets, listOfOneBasketItem } from "../fixtures/basket";
const csf = {
  title: "Basket",
  component: Basket,
};
export default csf;

export const Default = () => <Basket />;

export const WithSomesItems = () => <Basket basket={listOfBaskets} />;

export const WithOneItem = () => <Basket basket={listOfOneBasketItem} />;
