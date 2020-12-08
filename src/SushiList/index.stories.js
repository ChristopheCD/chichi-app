import SushiList from "./";

const sushis = new Array(8).fill(null).map((_sushi, id) => ({
  id,
  title: `Maki ${id}`,
  description: "poisson, riz",
}));

const csf = {
  title: "SushiList",
  component: SushiList,
};
export default csf;

export const Default = () => <SushiList />;

export const WithSomeSushis = () => <SushiList sushis={sushis} />;
