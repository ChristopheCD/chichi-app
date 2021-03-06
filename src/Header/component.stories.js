import Header from "./components";

const csf = {
  title: "Header",
  component: Header,
};
export default csf;

export const Default = () => <Header />;

export const WithShoppingCartBadge = () => (
  <Header shoppingCartItemsCount={42} />
);
