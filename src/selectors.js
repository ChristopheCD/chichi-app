export const totalByCount = (collection, key) =>
  collection.reduce((total, item) => total + item[key], 0);
