import React, { useRef } from 'react'
import productsFromFile from "../../data/products.json"
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer} from "react-toastify";
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';

function EditProduct() {
  const {productId} = useParams();
  const found = productsFromFile.find(product => product.id === Number(productId));

  const { t } = useTranslation();

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();

  function edit() {
    const index = productsFromFile.findIndex(product => product.id === Number(productId));
    productsFromFile[index] = {
        "id": Number(idRef.current.value),
        "image": imageRef.current.value,
        "name": nameRef.current.value,
        "price": Number(priceRef.current.value),
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "active": activeRef.current.checked    
    };
    navigate("/admin/maintain-products");

  }

  return (
    <div>
      <img src={found.image} alt="" />
      <label htmlFor="">ID</label><br />
      <input ref={idRef} defaultValue={found.id} type="number" /><br />
      <label htmlFor="">{t("name")}</label><br />
      <input ref={nameRef} defaultValue={found.name} type="text" /><br />
      <label htmlFor="">{t("price")}</label><br />
      <input ref={priceRef} defaultValue={found.price} type="number" /><br />
      <label htmlFor="">{t("image")}</label><br />
      <input ref={imageRef} defaultValue={found.image} type="text" /><br />
      <label htmlFor="">{t("category")}</label><br />
      <input ref={categoryRef} defaultValue={found.category} type="text" /><br />
      <label htmlFor="">{t("description")}</label><br />
      <input ref={descriptionRef} defaultValue={found.description} type="text" /><br />
      <label htmlFor="">{t("active")}</label><br />
      <input ref={activeRef} defaultChecked={found.active} type="checkbox" /><br />
      <button onClick={edit}>{t("edit")}</button>
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  )
}

export default EditProduct