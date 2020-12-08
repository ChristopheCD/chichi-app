import SushiListWithFilter from ".";
import { listOfShushis, listOfOneSushi } from "../fixtures/sushis";

const csf = {
  title: "SushiListWithFilter",
  component: SushiListWithFilter,
};
export default csf;

export const Default = () => <SushiListWithFilter />;

export const WithSomeSushis = () => (
  <SushiListWithFilter sushis={listOfShushis} />
);

export const WithOneSushis = () => (
  <SushiListWithFilter sushis={listOfOneSushi} />
);
