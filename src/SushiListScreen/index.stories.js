import SushiListScreen from ".";
import { listOfShushis, listOfOneSushi } from "../fixtures/sushis";

const csf = {
  title: "SushiListScreen",
  component: SushiListScreen,
};
export default csf;

export const Default = () => <SushiListScreen />;

export const WithSomeSushis = () => <SushiListScreen sushis={listOfShushis} />;

export const WithOneSushis = () => <SushiListScreen sushis={listOfOneSushi} />;
