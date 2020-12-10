import Counter from ".";

const csf = {
  title: "Counter",
  component: Counter,
};
export default csf;

export const Default = () => <Counter />;

export const WithBigValue = () => <Counter value={100} />;
