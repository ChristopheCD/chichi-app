import Header from "../Header";
import { element } from "prop-types";

export default function Screen({ children }) {
  return (
    <>
      <Header shoppingCartItemsCount={42} />
      {children}
    </>
  );
}

Screen.propTypes = {
  children: element,
};
