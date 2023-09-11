import React, { useEffect, useRef, useState } from "react";
// import productsFromFile from "../../data/products.json";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";
import config from "../../data/config.json";

// Kategooriate dropdownist näitamine läbi andmebaasi
// Toodete võtmine andmebaasist
// Toote muutmise lisamine andmebaasi (kontrolli hiljem andmebaasist kas ka seal muutus)


function EditProduct() {
  const { productId } = useParams();
 
  const { t } = useTranslation();
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [idUnique, uIdUnique] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const found = products.find(product => product.id === Number(productId));

  useEffect(() => {
    fetch(config.products)
      .then(res => res.json())
      .then(json => {
        setProducts(json || [])
        setLoading(false);
      });

    fetch(config.categories)
      .then(res => res.json())
      .then(json => setCategories(json || []));
    }, []);

    function edit() {
      if (idRef.current.value === "") {
        toast.error(t("edit-product.edit-product-id"));
        return; // funktsioon ei lähe edasi siit kohast
      }
  
      if (nameRef.current.value === "") {
        toast.error(t("edit-product.edit-product-name"));
        return;
      }
  
      //  nameRef.current.value[0].toLowerCase() === nameRef.current.value[0]
      if (nameRef.current.value[0].toUpperCase() !== nameRef.current.value[0]) {
        toast.error(t("edit-product.edit-product-upper"));
        return;
      }
  
      if (imageRef.current.value.includes(" ")) {
        toast.error(t("edit-product.edit-product-image"));
        return;
      }
   
      const index = products.findIndex(product => product.id === Number(productId));
      products[index] = {
        "id": Number(idRef.current.value),
        "image": imageRef.current.value,
        "name": nameRef.current.value,
        "price": Number(priceRef.current.value),
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "active": activeRef.current.checked
      };
      fetch(config.products , {
        method: "PUT", 
        body: JSON.stringify(products)
        // Ootab vastuse andmebaasist ära ja siis jätkab koodi lugemist
      }).then(() => navigate("/admin/maintain-products"));

    }

    const checkIdUniqueness = () => {
      if (idRef.current.value === productId) {
        uIdUnique(true);
        return;
      }
      const index = products.findIndex(product => product.id === Number(idRef.current.value));
      if (index === -1) {
        uIdUnique(true);
      } else {
        uIdUnique(false);
      }
    };
     
  if (isLoading === true) {
    return <Spinner/>
  }

  if (found === undefined) {
    return <div>Product not found</div>
  }

  return (
    <div>
      {idUnique === false && <div>{t("not-unique")}</div>}
      <img src={found.image} alt="" />
      <label htmlFor="">ID</label>
      <br />
      <input
        className={idUnique === false ? "error" : undefined}
        ref={idRef}
        onChange={checkIdUniqueness}
        defaultValue={found.id}
        type="number"
      />
      <br />
      <label htmlFor="">{t("name")}</label>
      <br />
      <input ref={nameRef} defaultValue={found.name} type="text" />
      <br />
      <label htmlFor="">{t("price")}</label>
      <br />
      <input ref={priceRef} defaultValue={found.price} type="number" />
      <br />
      <label htmlFor="">{t("image")}</label>
      <br />
      <input ref={imageRef} defaultValue={found.image} type="text" />
      <br />
      <label htmlFor="">{t("category")}</label>
      <br />
      <select ref={categoryRef} defaultValue={found.category}>
        {categories.map(category => <option key={category.name}>{category.name}</option> )}
      </select><br />
      <label htmlFor="">{t("description")}</label>
      <input
        ref={descriptionRef}
        defaultValue={found.description}
        type="text"
      />
      <br />
      <label htmlFor="">{t("active")}</label>
      <br />
      <input ref={activeRef} defaultChecked={found.active} type="checkbox" />
      <br />
      <button disabled={idUnique === false} onClick={edit}>
        {t("edit")}
      </button>
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  )
}

export default EditProduct;

// if (idRef.current.value === "") {
//       // toasti tõlkimiseks tavalised sulud
//       toast.error("Please enter product id!!");
//       return;
//     }

//     if (nameRef.current.value === "") {
//       // toasti tõlkimiseks tavalised sulud
//       toast.error("Please enter product name!!");
//       return;
//     }

//     if (nameRef.current.value[0]toLowerCase() === nameRef.current.value[0]toLowerCase()) {
//       // toasti tõlkimiseks tavalised sulud
//       toast.error("Please enter product name!!");
//       return;
//     }

