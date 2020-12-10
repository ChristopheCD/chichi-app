export const sushiTypes = ["Maki", "Sashimi", "Chirachi", "Spring Roll"];

const createSushi = (id) => ({
  id,
  title: `${sushiTypes[id % sushiTypes.length]} ${id}`,
  description: "poisson, riz",
});

export const listOfShushis = new Array(8)
  .fill(null)
  .map((_sushi, id) => createSushi(id));

export const listOfOneSushi = [createSushi(1)];
