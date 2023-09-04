import React, { useEffect, useState } from "react";
import "../../css/Cart.css";
// import cartFromFile from "../../data/cart.json";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const { t } = useTranslation();

  // API päringutes peab alati olema useState
  // ja useState algväärtus sulgude sees peab olema seda/sama tüüpi tühi
  // API päring võtab aega u 0.5 sek
  // Senikaua on koodis useState'il algväärtus
  const [parcelMachines, setParcelMachines] = useState([]);

  // uef on lühend VanemReact: componentDidMount    componentWillMount
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then((res) => res.json()) // koos metadataga tagastus
      .then((json) => setParcelMachines(json)); // reaalselt mis seal API päringus tagastatakse
  }, []);

  function emptyCart() {
    cart.splice(0);
    setCart(cart.slice());
    toast.error(t("cart-empty"));
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function increaseQuantity(index) {
    cart[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function decreaseQuantity(index) {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function cartSum() {
    let sum = 0;
    cart.forEach(
      (cartProduct) =>
        (sum = sum + cartProduct.product.price * cartProduct.quantity)
    );

    return sum.toFixed(2);
  }

  if (parcelMachines.length === 0) {
    return <div>Loading...</div>;
  }

  function removeItem(index) {
    cart.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function pay() {
    const url="https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentBody = {
      "api_username": "e36eb40f5ec87fa2",  // turvaelement
      "account_name": "EUR3D1",           // konto
      "amount": cartSum(),                // tellimuse summa
      "order_reference": Math.random() * 999999,                    // tellimuse number
      "nonce": "a9b7f7e7" + Math.random() * 999999 + new Date(),    // turvaelement
      "timestamp": new Date(),            // turvaelement
      "customer_url": "https://neti.ee"   // kuhu tagasi suunatakse
      };
    const paymentHeader = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    };



    fetch(url, {method: "POST", body: JSON.stringify(paymentBody), headers: paymentHeader})
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link);
  }

  // 1. HTML's
  // <a href />
  // <Link>
  // 2. const navigate = useNavigation(); <--- siseseks suunamiseks
  // nav(json.payment_link)
  // 3. windows.location.href = ""https://neti.ee"" <-- rakendusest välja suunamiseks
  if (parcelMachines.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>
        {cart.length > 1 && (
          <div>
            {cart.length} {t("products-in-cart")}
          </div>
        )}
        {cart.length === 1 && (
          <div>
            {cart.length} {t("product-in-cart")}
          </div>
        )}
        {cart.length > 0 && (
          <button onClick={emptyCart}>{t("empty-cart")}</button>
        )}
        <br /> <br />
        {cart.map((cartProduct, index) => (
          <div className="product" key={index}>
            <img className="image" src={cartProduct.product.image} alt="" />
            <br />
            <div className="name">{cartProduct.product.name}</div>
            <div className="price">{cartProduct.product.price.toFixed(2)}€</div>
            {/* <button >+</button> */}
            <div className="quantity">
              <img
                className="button"
                onClick={() => increaseQuantity(index)}
                src="/add.png"
                alt=""
              />
              <div>{cartProduct.quantity} pcs</div>
              {/* <button >-</button> */}
              <img
                className="button"
                onClick={() => decreaseQuantity(index)}
                src="/minus.png"
                alt=""
              />
            </div>
            <div className="total">
              {(cartProduct.product.price * cartProduct.quantity).toFixed(2)}€
            </div>
            {/* <button >Remove Item</button> */}
            <img
              className="button"
              onClick={() => removeItem(index)}
              src="/delete.png"
              alt=""
            />
            <br /> <br />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div>
          <div>
            {cart.length > 0 && (
              <div className="total">
                {t("subtotal")} {cartSum()}€{" "}
              </div>
            )}
            <select name="" id="">
              {parcelMachines.filter((pm) => pm.A0_NAME === "EE").map((pm) => (<option key={pm.NAME}>{pm.NAME}</option>))}
            </select>
            <div> Summary: {cartSum()}$</div>
            <button onClick={pay}>Maksma</button>
          </div>
        </div>
      )}
      {cart.length === 0 && (
        <>
          <div>{t("cart-empty")}</div>
          <Link to="/">{t("shop")}</Link>
        </>
      )}
      <br />

      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
      
    </div>
  );
}

export default Cart;

// Cart.js lehel võimaldada ostukorvi sisu vaadata
//      ostukorvist kustutada, ostukorvi tühjendada, ostukorvi kogusummat vaadata
//      dünaamiline väljakuvamine (tühjendamine ja kogusumma peita kui tühi)
//              kui tühi, siis öelda, et on tühi
