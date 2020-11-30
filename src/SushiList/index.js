import { arrayOf, number, shape, string } from "prop-types";

export default function SushiList({ sushis }) {
  return (
    <ul>
      {sushis.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
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
