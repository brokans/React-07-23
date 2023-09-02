import React, { useEffect, useRef, useState } from "react";
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import config from "../../data/config.json"


function AddProduct() {
  // USEREF
  const idRef = useRef();
  const imageRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const activeRef = useRef();
  const { productId } = useParams();
  const found = productsFromFile.find(
    (product) => product.id === Number(productId)
  );
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [idUnique, uIdUnique] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(config.products)
      .then((res) => res.json())
      .then((json) => setProducts(json || []));

    fetch(config.categories)
      .then((res) => res.json())
      .then((json) => setCategories(json || []));
  }, []);

  const add = () => {
    // const index = productsFromFile.findIndex(
    //   (product) => product.id === Number(productId)
    // );
    // productsFromFile[index] = {
    //   id: Number(idRef.current.value)
    // }
    if (idRef.current.value === "") {
      // toasti tõlkimiseks tavalised sulud
      toast.error(t("enter-product-id"));
      return;
    } else if (nameRef.current.value.includes("!")) {
      toast.warning(t("no-exclamation"));
    } else if (nameRef.current.value === "") {
      toast.error(t("enter-product-name"));
    } else if (
      nameRef.current.value[0].toLowerCase() === nameRef.current.value[0]
    ) {
      toast.error(t("enter-product-upper"));
    } else {
      toast.success(t("product-entered") + idRef.current.value);
      products.push({
        id: Number(idRef.current.value),
        image: imageRef.current.value,
        name: nameRef.current.value,
        price: Number(priceRef.current.value),
        description: descriptionRef.current.value,
        // kui tüüp muutub tuleb siin ka muuta
        category: categoryRef.current.value,
        active: activeRef.current.checked,
      });
      imageRef.current.value = "";
      idRef.current.value = "";
      nameRef.current.value = "";
      priceRef.current.value = "";
      descriptionRef.current.value = "";
      categoryRef.current.value = "";
      activeRef.current.value = false;

      fetch(
        config.products,
        { 
          method: "PUT", 
          body: JSON.stringify(products) 
        })}
  };

  function checkIdUnique() {
    const index = products.findIndex(
      (product) => product.id === Number(idRef.current.value)
    );

    if (index === -1) {
      // Kui toodet pole, aga otsitakse, on index -1
      uIdUnique(true);
    } else {
      uIdUnique(false);
    }
  }

  return (
    <div>
      {idUnique === false && <div>{t("not-unique")}</div>}
      <div>{t("add-product-text")}</div>
      <label>ID: </label>
      <br />
      <input
        className={idUnique === false ? "error" : undefined}
        ref={idRef}
        onChange={checkIdUnique}
        defaultValue={found}
        type="number"
      />
      <br />
      <label>{t("image")}</label>
      <br />
      <input ref={imageRef} type="text" />
      <br />
      <label>{t("name")}</label>
      <br />
      <input ref={nameRef} type="text" />
      <br />
      <label>{t("price")}</label>
      <br />
      <input ref={priceRef} type="number" />
      <br />
      <label>{t("description")}</label>
      <br />
      <input ref={descriptionRef} type="text" />
      <br />
      <label>{t("category")}</label>
      <br />
      {/* <input ref={categoryRef} type="text" /> */}
      <select ref={categoryRef}>
        {categories.map((category) => (
          <option key={category.name} value="">
            {category.name}
          </option>
        ))}
      </select>
      <br />
      <label>{t("active")}</label>
      <br />
      {/* checkbox kui ei taha kuvada */}
      <input ref={activeRef} type="checkbox" />
      <br />
      <button onClick={add}>{t("add")}</button> <br />
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
}

export default AddProduct;
