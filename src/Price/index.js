import { number, string } from "prop-types";
export default function Price({ price, lang, currency }) {
  if (price <= 0) {
    console.error("Attention, pas de prix !!!");
    return "";
  }
  return new Intl.NumberFormat(lang, {
    style: "currency",
    currency,
  }).format(price);
}

Price.propTypes = {
  price: number,
  lang: string,
  currency: string,
};

Price.defaultProps = {
  lang: "fr-FR",
  currency: "EUR",
};
