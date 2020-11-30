import "./styles.css";
import SushiList from "../SushiList";

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

export default function App() {
  return (
    <div>
      <p>Hello !</p>
      <SushiList sushis={sushis} />
    </div>
  );
}
