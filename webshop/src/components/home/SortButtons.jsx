import React from "react";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";

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
    <div className="d-flex">
        <Button onClick={sortAZ}>{t("sort-a-z")}</Button>
        <Button onClick={sortZA}>{t("sort-z-a")}</Button>
        <Button onClick={sortPriceAsc}>{t("sort-price-asc")}</Button>
        <Button onClick={sortPriceDesc}>{t("sort-price-desc")}</Button>
    </div>
  );
}

export default SortButtons;
