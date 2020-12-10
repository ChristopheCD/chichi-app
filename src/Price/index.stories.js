import Price from ".";

const csf = {
  title: "Price",
  component: Price,
};
export default csf;

export const Default = () => <Price />;

export const WithDecimalPrice = () => <Price price={12.89} />;

export const InDollar = () => <Price price={12.89} currency={"USD"} />;

export const InPoundAndInEnglish = () => (
  <Price price={12.89} currency={"GBP"} lang={"en-GB"} />
);

export const WithZeroPrice = () => <Price price={0} />;

export const WithNegativePrice = () => <Price price={-50} />;
