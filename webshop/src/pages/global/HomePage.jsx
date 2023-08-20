import React, { useState } from "react";
import productsFromFile from "../../data/products.json";
import cartFromFile from "../../data/cart.json";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";

function HomePage() {
  // const { t } = useTranslation();
  const [products, setProducts] = useState(productsFromFile);

  // ADD PRODUCT
  const addToCart = (clickedProduct) => {
    cartFromFile.push(clickedProduct);
    toast.success("Product added to cart!");
};

  // SORTEERIMINE
  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name, "et"));
    setProducts(products.slice());
  };

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name, "et"));
    setProducts(products.slice());
  };

  const sortPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  };

  const sortPriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  };

  // FILTRID
  const filterMemory = () => {
    const result = productsFromFile.filter((product) =>
      product.category.includes("memory bank")
    );
    setProducts(result);
  };

  const filterUsb = () => {
    const result = productsFromFile.filter((product) =>
      product.category.includes("usb drive"));
    setProducts(result);
  };

  const filterTent = () => {
    const result = productsFromFile.filter((product) =>
      product.category.includes("tent"));
    setProducts(result);
  };

  const filterCamping = () => {
    const result = productsFromFile.filter((product) =>
      product.category.includes("camping"));
    setProducts(result);
  };

  
  return (
    <div>
      <div>Total products: {products.length} pcs</div>
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortPriceAsc}>Sort price asc</button>
      <button onClick={sortPriceDesc}>Sort price desc</button>
      <br />
      <button onClick={filterMemory}>Memory Bank</button>
      <button onClick={filterUsb}>Usb Drive</button>
      <button onClick={filterTent}>Tent</button>
      <button onClick={filterCamping}>Camping</button>
      <br /> <br />
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          <br />
          <div>{product.id}</div>
          <br />
          <div>{product.name}</div>
          <br />
          <div>{product.price}€</div>
          <br />
          <button onClick={() => addToCart(product)}>Add To Cart</button>{" "}
          <Button as={Link} to={"/product/" + product.id}>
            Details
          </Button>
          <br />
          <br />
        </div>
      ))}
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />

    </div>
  );
}

export default HomePage;
