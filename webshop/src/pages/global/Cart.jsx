import React, { useState } from "react";
// import cartFromFile from "../../data/cart.json";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from 'react-i18next';


function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));

  const { t } = useTranslation();

  function emptyCart() {
    cart.splice(0);
    setCart(cart.slice());
    toast.error(t("cart-empty"));
    localStorage.setItem("cart", JSON.stringify(cart));

  }

  function addProduct(clickedProduct) {
    cart.push(clickedProduct); // iga nupuvajutus peab olema erinev (dünaamiline)
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));

  };

  function removeProduct(index) {
    cart.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));

  }

  function cartSum() {
    let sum = 0;
    cart.forEach((product) => (sum = sum + product.price));
    return sum.toPrecision(4);
  }


  return (
    <div>
      <div>
        {cart.length > 1 && <div>{cart.length} {t("products-in-cart")}</div>}
        {cart.length === 1 && <div>{cart.length} {t("product-in-cart")}</div>}
        {cart.length > 0 && <button onClick={emptyCart}>{t("empty-cart")}</button>}
        <br /> <br />
        {cart.map((product, index) => (
          <div key={product.index}>
            {product.id}
            <img src={product.image} alt="" />
            <br />
            <div>{product.id}</div>
            <br />
            <div>{product.name}</div>
            <br />
            <div>{product.price}€</div>
            <button onClick={() => addProduct(product)}>+</button>
            <button onClick={() => removeProduct(product)}>-</button>
            <br /> <br />
          </div>
        ))}
      </div>
      {cart.length === 0 && (
        <>
        <div>{t("cart-empty")}</div>
        <Link to="/">{t("shop")}</Link>
        </>
      )}
      <br />
      {cart.length > 0 && <div>{t("subtotal")} {cartSum()}€ </div> }
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
}

export default Cart;

// Cart.js lehel võimaldada ostukorvi sisu vaadata
//      ostukorvist kustutada, ostukorvi tühjendada, ostukorvi kogusummat vaadata
//      dünaamiline väljakuvamine (tühjendamine ja kogusumma peita kui tühi)
//              kui tühi, siis öelda, et on tühi