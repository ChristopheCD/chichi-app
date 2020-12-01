import Header from "./";

const csf = {
  title: "Header",
  component: Header,
};
export default csf;

export const Default = () => <Header />;

export const WithShoppingCartBadge = () => (
  <Header shoppingCartItemsCount={42} />
);
