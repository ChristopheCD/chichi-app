import SushiList from "./";

const sushis = [
  {
    id: 1,
    title: "Maki",
    description: "poisson, riz",
  },
  {
    id: 2,
    title: "Temaki",
    description: "poisson, riz",
  },
  {
    id: 3,
    title: "Urumaki",
    description: "poisson, riz",
  },
  {
    id: 4,
    title: "Sashimi",
    description: "poisson, riz",
  },
];

const csf = {
  title: "SushiList",
  component: SushiList,
};
export default csf;

export const Default = () => <SushiList />;

export const WithSomeSushis = () => <SushiList sushis={sushis} />;
