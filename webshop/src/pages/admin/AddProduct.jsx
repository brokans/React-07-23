import React, { useRef, useState } from "react";
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function AddProduct() {
  const [message, uMessage] = useState("Add product");
  // USEREF
  const idRef = useRef();
  const imageRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const activeRef = useRef();



  const add = () => {
    if (nameRef.current.value === "") {
      uMessage("Please enter product name!");
      toast.error("Please enter product name!!");
    } else if (nameRef.current.value.includes("!")) {
      uMessage("Can't add product with exclamation mark!");
      toast.warning("Can't add product with exclamation mark!");
    } else {
      uMessage("Product successfully added: " + nameRef.current.value);
      toast.success("Product successfully added! " + nameRef.current.value);
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
      <div>{message}</div>
        <label>Product ID: </label>
        <br />
        <input ref={idRef} type="number" />
        <br />
        <label>Product image: </label>
        <br />
        <input ref={imageRef} type="text" />
        <br />
        <label>Product name: </label>
        <br />
        <input ref={nameRef} type="text" />
        <br />
        <label>Product price: </label>
        <br />
        <input ref={priceRef} type="number" />
        <br />
        <label>Product description: </label>
        <br />
        <input ref={descriptionRef} type="text" />
        <br />
        <label>Product category: </label>
        <br />
        <input ref={categoryRef} type="text" />
        <br />
        <label>Product active: </label>
        <br />
        {/* checkbox kui ei taha kuvada */}
        <input ref={activeRef} type="checkbox" />
        <br />
        <button onClick={add}>Add</button> <br />
        <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
}

export default AddProduct