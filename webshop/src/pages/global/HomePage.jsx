import React, { useState } from "react";
import productsFromFile from "../../data/products.json";
// import cartFromFile from "../../data/cart.json";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";

function HomePage() {

  const { t } = useTranslation();
  // const { t } = useTranslation();
  const [products, setProducts] = useState(productsFromFile);

  // ADD PRODUCT
  const addToCart = (clickedProduct) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(clickedProduct);
    // cartFromFile.push(clickedProduct);
    // Salvestab ostukorvi lokaalselt
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success((t("product-added")));

    // 1. Võtame localStorage'st ostukorvi varasema seisu
    // 2. Võtame LocalStorage'st saadud väärtuselt jutumärgi maha: JSON.parse()
    // 3. Lisame saadud väärtusele juurde ühe toote: .push()
    // 4. Paneme uuenenud väärtustele jutumärgid peale tagasi JSON.stringify()
    // 5. Paneme localStorage'sse tagasi: LocalStorage.setItem()
};

function reset() {
  setProducts(products.slice());
} 

  // SORTEERIMINE
  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name, "et"));
    setProducts(products.slice());
  };

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name, "et"));
    setProducts(products.slice());
  };

  const sortPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  };

  const sortPriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  };

  // FILTRID
  const filterMemory = () => {
    const result = productsFromFile.filter((product) =>
      product.category.includes("memory bank")
    );
    setProducts(result);
  };

  const filterUsb = () => {
    const result = productsFromFile.filter((product) =>
      product.category.includes("usb drive"));
    setProducts(result);
  };

  const filterTent = () => {
    const result = productsFromFile.filter((product) =>
      product.category.includes("tent"));
    setProducts(result);
  };

  const filterCamping = () => {
    const result = productsFromFile.filter((product) =>
      product.category.includes("camping"));
    setProducts(result);
  };

  
  return (
    <div>
      <div>{t("total-products")} {products.length} {t("pcs")}</div>
      <button onClick={reset}>{t("reset")}</button>
      <br />
      <button onClick={sortAZ}>{t("sort-a-z")}</button>
      <button onClick={sortZA}>{t("sort-z-a")}</button>
      <button onClick={sortPriceAsc}>{t("sort-price-asc")}</button>
      <button onClick={sortPriceDesc}>{t("sort-price-desc")}</button>
      <br />
      <button onClick={filterMemory}>{t("memory-bank")}</button>
      <button onClick={filterUsb}>{t("usb-drive")}</button>
      <button onClick={filterTent}>{t("tent")}</button>
      <button onClick={filterCamping}>{t("camping")}</button>
      <br /> <br />
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          <br />
          <div>{product.id}</div>
          <br />
          <div>{product.name}</div>
          <br />
          <div>{product.price}€</div>
          <br />
          <button onClick={() => addToCart(product)}> {t("addTo-cart")}</button>{" "}
          <Button as={Link} to={"/product/" + product.id}>
            {t("details")}
          </Button>
          <br />
          <br />
        </div>
      ))}
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />

    </div>
  );
}

export default HomePage;
