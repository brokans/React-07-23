import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import { Spinner } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

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
  const searchedRef = useRef();

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

  function reset() {
    setProducts(dbProducts.slice());
  }

  function searchFromProducts() {
    const result = dbProducts.filter(
      (product) =>
        product.name
          .toLowerCase()
          .includes(searchedRef.current.value.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(searchedRef.current.value.toLowerCase()) ||
        product.id.toString().includes(searchedRef.current.value)
    );
    setProducts(result);
  }

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="homePage-carousel">
        <CarouselGallery />
      </div>
      <br /> <br />
      <div>
        {t("total-products")} {products.length} {t("pcs")}
      </div>
      <br />
      <input
        onChange={searchFromProducts}
        ref={searchedRef}
        placeholder={t("search")}
        type="text"
      />{" "}
      <br /> <br />
      <Button onClick={reset}>{t("reset")}</Button>
      <br />
      <Nav className="justify-content-center">
        <NavDropdown title={t("sort")} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            <SortButtons products={products} setProducts={setProducts} />
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title={t("filter")} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            <FilterButtons
              dbProducts={dbProducts}
              setProducts={setProducts}
              categories={categories}
            />
          </NavDropdown.Item>
        </NavDropdown>{" "}
      </Nav>
      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <ToastContainer position="bottom-left" autoClose={2000} theme="dark" />
    </div>
  );
}

export default HomePage;
