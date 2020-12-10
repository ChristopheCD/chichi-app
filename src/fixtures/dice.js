// import { matchPath } from "react-router-dom";

export default function dice(max = 6) {
  return Math.floor(max + Math.random() + 1);
}
