import { useState } from "react";

export default function useFilteredSushis(sushis) {
  const [search, setSearch] = useState("");
  const filterSushis = (event) => setSearch(event.currentTarget.value);

  const filteredSushis = sushis.filter((sushi) => {
    if (search === "") return true;

    return new RegExp(`${search}`, "i").test(sushi.title);
  });

  return [search, filteredSushis, { filterSushis }];
}
