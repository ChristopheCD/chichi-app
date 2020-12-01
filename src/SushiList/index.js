import { arrayOf, number, shape, string } from "prop-types";

import { VerticalList, ListItem } from "./styles";

export default function SushiList({ sushis }) {
  return (
    <VerticalList>
      {sushis.map(({ id, title }) => (
        <ListItem key={id} id={id}>
          {title}
        </ListItem>
      ))}
    </VerticalList>
  );
}

SushiList.propTypes = {
  sushis: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      description: string,
      image: string,
    })
  ),
};

SushiList.defaultProps = {
  sushis: [],
};
