import SushiCard from "./";

const csf = {
  title: "SushiCard",
  component: SushiCard,
};
export default csf;

export const Default = () => (
  <SushiCard id={1} title="Sushi" description="Ingrédient riz poisson" />
);

export const WithImage = () => (
  <SushiCard
    title="Sushi"
    description="Ingrédient riz poisson"
    image="https://picsum.photos/seed/sushi1/400/300"
    id={1}
  />
);
