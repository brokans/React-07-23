import React from "react";
import { useTranslation } from "react-i18next";

function SortButtons(props) {
  const { t } = useTranslation();

  const sortAZ = () => {
    props.products.sort((a, b) => a.name.localeCompare(b.name, "et"));
    props.setProducts(props.products.slice());
  };

  const sortZA = () => {
    props.products.sort((a, b) => b.name.localeCompare(a.name, "et"));
    props.setProducts(props.products.slice());
  };

  const sortPriceAsc = () => {
    props.products.sort((a, b) => a.price - b.price);
    props.setProducts(props.products.slice());
  };

  const sortPriceDesc = () => {
    props.products.sort((a, b) => b.price - a.price);
    props.setProducts(props.products.slice());
  };
  return (
    // Fragment et ei tekiks kujundamisel probleeme
    <React.Fragment>
      <button onClick={() => sortAZ}>{t("sort-a-z")}</button>
      <button onClick={sortZA}>{t("sort-z-a")}</button>
      <button onClick={sortPriceAsc}>{t("sort-price-asc")}</button>
      <button onClick={sortPriceDesc}>{t("sort-price-desc")}</button>
    </React.Fragment>
  );
}

export default SortButtons;
