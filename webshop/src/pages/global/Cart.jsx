import React, { useState } from "react";
import cartFromFile from "../../data/cart.json";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


function Cart() {
  const [cart, uCart] = useState(cartFromFile);

  function emptyCart() {
    cart.splice(0);
    uCart(cart.slice());
    toast.error("Cart emptied!");

  }

  const addProduct = (clickedProduct) => {
    cart.push(clickedProduct); // iga nupuvajutus peab olema erinev (dünaamiline)
    uCart(cart.slice());
    toast.success("Product succesfully added!");
  };

  function removeProduct(index) {
    cart.splice(index, 1);
    uCart(cart.slice());
    toast.warning("Product deleted from cart!");
  }

  function cartSum() {
    let sum = 0;
    cart.forEach((product) => (sum = sum + product.price));
    return sum;
  }


  return (
    <div>
      <div>
        {cart.length > 0 && <button onClick={emptyCart}>Empty cart</button>}
        {cart.length > 0 && <div>{cart.length} products in cart.</div>}
        {cart.map((product, index) => (
          <div key={product.id}>
            {product.id}
            <img src={product.image} alt="" />
            <br />
            <div>{product.id}</div>
            <br />
            <div>{product.name}</div>
            <br />
            <div>{product.price}€</div>
            <br />
            <button onClick={() => addProduct(product)}>+</button>
            <button onClick={() => removeProduct(product)}>-</button>
          </div>
        ))}
      </div>
      {cart.length === 0 && (
        <>
        <div>Cart is empty.</div>
        <Link to="/">Shop</Link>
        </>
      )}
      <br />
      {cart.length > 0 && <div>Subtotal: {cartSum()}€ </div> }
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
}

export default Cart;

// Cart.js lehel võimaldada ostukorvi sisu vaadata
//      ostukorvist kustutada, ostukorvi tühjendada, ostukorvi kogusummat vaadata
//      dünaamiline väljakuvamine (tühjendamine ja kogusumma peita kui tühi)
//              kui tühi, siis öelda, et on tühi