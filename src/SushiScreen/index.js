import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import Screen from "../Screen";
import useSushis from "../useSushis";

export default function SushiScreen() {
  const { id } = useParams();

  const { data: sushi } = useSushis(id);

  return (
    <Screen>
      <Typography variant="h1">Sushi {sushi?.title}</Typography>
    </Screen>
  );
}
