import BasketScreen from ".";
import { listOfBaskets } from "../fixtures/basket";
const csf = {
  title: "BasketScreen",
  component: BasketScreen,
};
export default csf;

export const Default = () => <BasketScreen />;
export const WithBasketItems = () => <BasketScreen basket={listOfBaskets} />;
