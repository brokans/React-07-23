import React from "react";
import Button from "@mui/material/Button";
import { Button as BButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import styles from "../../css/HomePage.module.css";
import { useContext } from "react";
import { CartSumContext } from "../../store/CartSumContext";

function Product({ product }) {
  const { setCartSum } = useContext(CartSumContext);
  const { t } = useTranslation();

  // ADD PRODUCT
  const addToCart = (clickedProduct) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    // kas on ostukorvis
    const index = cart.findIndex(
      (cartProduct) => cartProduct.product.id === clickedProduct.id
    );
    if (index >= 0) {
      // kui on ostukorvis siis quantity pluss üks
      cart[index].quantity++;
    } else {
      // lisab ühe toote, hiljem lisab samale juurde, ei teki eraldi samasugust toodet
      cart.push({ quantity: 1, product: clickedProduct });
    }

    let sum = 0;
    cart.forEach(
      (cartProduct) =>
        (sum = sum + cartProduct.product.price * cartProduct.quantity)
    );
    setCartSum(sum.toFixed(2));
    // return sum.toFixed(2);
    // Salvestab ostukorvi lokaalselt
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(t("product-added"));

    // 1. Võtame localStorage'st ostukorvi varasema seisu
    // 2. Võtame LocalStorage'st saadud väärtuselt jutumärgi maha: JSON.parse()
    // 3. Lisame saadud väärtusele juurde ühe toote: .push()
    // 4. Paneme uuenenud väärtustele jutumärgid peale tagasi JSON.stringify()
    // 5. Paneme localStorage'sse tagasi: LocalStorage.setItem()
  };

  return (
    <div>
      <div className={styles.product}>
        <img src={product.image} alt="" />
        <br />
        <br />
        <div>{product.name}</div>
        <br />
        <div>{product.price.toFixed(2)}€</div>
        <br />
        <Button variant="contained" onClick={() => addToCart(product)}>
          {t("addTo-cart")}
        </Button>
        <br />
        <BButton as={Link} to={"/product/" + product.id}>
          {t("details")}
        </BButton>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Product;
