import React, { useEffect, useState } from "react";
// import productsFromFile from "../../data/products.json";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";
import config from "../../data/config.json"
import styles from "../../css/MaintainProducts.module.css";



function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();
  const searchedRef = useRef();
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);



  useEffect(() => {
    fetch(config.products)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      });
  }, []);

  function deleteProduct(productId) {
    const index = dbProducts.findIndex(product => product.id === productId)
    dbProducts.splice(index, 1);
    fetch(
      config.products,
      { 
        method: "PUT", 
        body: JSON.stringify(dbProducts) 
      }).then(() => {
        toast.success(t("product-deleted"));
        searchFromProducts();
      })
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
    return <Spinner/>
  }

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <div>
        {" "}
        {products.length} {t("products-found")}
      </div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>

        </thead>
        <tbody>
          {products.map(product => (
            <tr
              key={product.id}
              className={ product.active ? styles.active : styles.inactive }
            >
              <td><img src={product.image} alt="" /></td>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>
                <button onClick={() => deleteProduct(product.id)}>{t("delete")}</button>
                <Button as={Link} to={"/admin/edit-product/" + product.id}>
                {t("edit")}
              </Button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
}

export default MaintainProducts;
