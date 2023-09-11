import React, { useState } from "react";
// import productsFromFile from "../../data/products.json";
// import cartFromFile from "../../data/cart.json";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Button as BButton, Spinner } from "react-bootstrap";
import Button from '@mui/material/Button';
import { useEffect } from "react";
import config from "../../data/config.json";
import styles from "../../css/HomePage.module.css";
import CarouselGallery from "../../components/home/CarouselGallery";
import SortButtons from "../../components/home/SortButtons";

function HomePage() {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.products)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.slice() || []);
        setDbProducts(json.slice() || []);
        setLoading(false);
      });

    fetch(config.categories)
      .then((res) => res.json())
      .then((json) => setCategories(json || []));
  }, []);

  // ADD PRODUCT
  const addToCart = (clickedProduct) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    // kas on ostukorvis
    const index = cart.findIndex(
      (cartProduct) => cartProduct.product.id === clickedProduct.id
    );
    if (index >= 0) {
      // kui on ostukorvis siis quantity pluss üks
      cart[index].quantity++;
    } else {
      // lisab ühe toote, hiljem lisab samale juurde, ei teki eraldi samasugust toodet
      cart.push({ quantity: 1, product: clickedProduct });
    }
    // Salvestab ostukorvi lokaalselt
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(t("product-added"));

    // 1. Võtame localStorage'st ostukorvi varasema seisu
    // 2. Võtame LocalStorage'st saadud väärtuselt jutumärgi maha: JSON.parse()
    // 3. Lisame saadud väärtusele juurde ühe toote: .push()
    // 4. Paneme uuenenud väärtustele jutumärgid peale tagasi JSON.stringify()
    // 5. Paneme localStorage'sse tagasi: LocalStorage.setItem()
  };

  function reset() {
    setProducts(dbProducts.slice());
  }

  

  const filterByCategory = (categoryClicked) => {
    const result = dbProducts.filter(
      (product) => product.category === categoryClicked
    );
    setProducts(result);
  };

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <div>
      <CarouselGallery />
      <div>
        {t("total-products")} {products.length} {t("pcs")}
      </div>
      <button onClick={reset}>{t("reset")}</button>
      <br />
      <SortButtons
        products = {products}
        setProducts={setProducts}
      />
      <br />
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => filterByCategory(category.name)}
        >
          {category.name}
        </button>
      ))}
      <br /> <br />
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <img src={product.image} alt="" />
            <br />
            <br />
            <div>{product.name}</div>
            <br />
            <div>{product.price.toFixed(2)}€</div>
            <br />
            <Button variant="contained" onClick={() => addToCart(product)}>
              {t("addTo-cart")}
            </Button><br />
            <BButton as={Link} to={"/product/" + product.id}>
              {t("details")}
            </BButton>
            <br />
            <br />
          </div>
        ))}
      </div>
      <ToastContainer position="bottom-left" autoClose={2000} theme="dark" />
    </div>
  );
}

export default HomePage;
