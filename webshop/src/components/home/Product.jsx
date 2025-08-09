import React from "react";
import Button  from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import styles from "../../css/HomePage.module.css";
import { useContext } from "react";
import { CartSumContext } from "../../store/CartSumContext";

function Product({ product }) {
  const { setCartSum } = useContext(CartSumContext);
  const { t } = useTranslation();

  const addToCart = (clickedProduct) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const index = cart.findIndex(
      (cartProduct) => cartProduct.product.id === clickedProduct.id
    );
    if (index >= 0) {
      cart[index].quantity++;
    } else {
      cart.push({ quantity: 1, product: clickedProduct });
    }

    let sum = 0;
    cart.forEach(
      (cartProduct) =>
        (sum = sum + cartProduct.product.price * cartProduct.quantity)
    );
    setCartSum(sum.toFixed(2));

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(t("product-added"));
  };

  return (
    <div>
      <div className={styles.product}>
        <Card className="mb-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price.toFixed(2)}€</Card.Text>
            <Button onClick={() => addToCart(product)}> 
              {t("addTo-cart")}
            </Button> <br />
            <Button className="bg-secondary" as={Link}  to={"/product/" + product.id}>
              {t("details")}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Product;
