import React, { useState } from "react";
// import productsFromFile from "../../data/products.json";
// import cartFromFile from "../../data/cart.json";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import { Spinner } from "react-bootstrap";

import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import config from "../../data/config.json";
import styles from "../../css/HomePage.module.css";
import CarouselGallery from "../../components/home/CarouselGallery";
import SortButtons from "../../components/home/SortButtons";
import FilterButtons from "../../components/home/FilterButtons";
import Product from "../../components/home/Product";

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
        setProducts(json.slice() || [])
        setDbProducts(json.slice() || [])
        setLoading(false);
      });

    fetch(config.categories)
      .then((res) => res.json())
      .then((json) => setCategories(json || []));
  }, []);

  

  function reset() {
    setProducts(dbProducts.slice());
  }

  

  

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
      <FilterButtons 
        dbProducts={dbProducts}
        setProducts={setProducts}
        categories={categories}
      />
      <br />
      
      <br /> <br />
      <div className={styles.products}>
        {products.map((product) => (
         < Product key={product.id} product={product}/>
        ))}
      </div>
      <ToastContainer position="bottom-left" autoClose={2000} theme="dark" />
    </div>
  );
}

export default HomePage;
