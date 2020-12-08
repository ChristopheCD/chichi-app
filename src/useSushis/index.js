import { useQuery } from "react-query";
import chichiFetch, { globalConfig } from "../chichiFetch";

export default function useSushis() {
  return useQuery("sushis", chichiFetch("/sushis"), globalConfig);
}
