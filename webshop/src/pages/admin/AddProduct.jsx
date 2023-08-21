import React, { useRef, useState } from "react";
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';



function AddProduct() {
  const { t } = useTranslation();
  const [message, uMessage] = useState("");
  
  

  // USEREF
  const idRef = useRef();
  const imageRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const activeRef = useRef();



  const add = () => {
    if (idRef.current.value === "") {
      // toasti tõlkimiseks tavalised sulud
      toast.error("Please enter product id!!");
      return;
    } 
    
    else if (idRef.current.value.includes("!")) {
      uMessage("Can't add product with exclamation mark!");
      toast.warning("Can't add product with exclamation mark!");
    } else if (idRef.current.value === "") {
        toast.error("Please enter product id!!");
    } else if (nameRef.current.value[0].toLowerCase() === nameRef.current.value[0]) {
      toast.error("Please enter product name!!");
    } else {
      uMessage("Product successfully added: " + idRef.current.value);
      toast.success("Product successfully added! " + idRef.current.value);
      productsFromFile.push({
        id: Number(idRef.current.value),
        image: imageRef.current.value,
        name: nameRef.current.value,
        price: Number(priceRef.current.value),
        description: descriptionRef.current.value,
        // kui tüüp muutub tuleb siin ka muuta
        category: categoryRef.current.value,
        active: activeRef.current.checked,
      });
    }
  };

  return (
    <div>
      {message}
      <div>{t("add-product-text")}</div>
        <label>ID: </label>
        <br />
        <input ref={idRef} type="number" />
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
        <input ref={categoryRef} type="text" />
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

export default AddProduct