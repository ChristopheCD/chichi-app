import SushiCard from "./";

const csf = {
  title: "SushiCard",
  component: SushiCard,
};
export default csf;

export const Default = () => (
  <SushiCard title="Sushi" description="Ingrédient riz poisson" />
);

export const WithImage = () => (
  <SushiCard
    title="Sushi"
    description="Ingrédient riz poisson"
    image="https://picsum.photos/seed/sushi1/400/300"
  />
);
