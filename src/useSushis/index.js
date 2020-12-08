import { useQuery } from "react-query";
import { useState } from "react";

import chichiFetch, { globalConfig } from "../chichiFetch";

const hasEnoughSearchTerm = (search) => search.length >= 3;

export default function useSushis() {
  const [search, setSearch] = useState("");
  const onSearchChange = (event) => setSearch(event.currentTarget.value);

  const route = [
    `/sushis`,
    hasEnoughSearchTerm(search) ? `?q=${search}` : null,
  ].join("");

  const queryKey = [
    "sushis",
    hasEnoughSearchTerm(search) ? { search } : undefined,
  ];

  const result = useQuery(queryKey, chichiFetch(route), globalConfig);

  return { ...result, search, onSearchChange };
}
