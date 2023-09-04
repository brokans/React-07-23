import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import productsFromFile from "../../data/products.json";
import config from "../../data/config.json"
import { Spinner } from "react-bootstrap";


function SingleProduct() {
  const {productId} = useParams();
  const [products, setProducts] = useState([]);
  const found = products.find(product => product.id === Number(productId));
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.products)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json || []);
        setLoading(false);
      });
  }, []);

  // Millegi pärast ei leia toodet üles


  // const found = productsFromFile.find(product => {
  //   return product.id;
  // });

  // function found() {
  //   productsFromFile.find(product => {
  //     return product.id === id;
  //   })
  // }
  if (isLoading === true) {
    return <Spinner/>
  }

  if (found === undefined) {
    return <div>Product was not found!</div>;
  }
  return (
    <div>
      {/* <div>Toote järjekorranumber: {nimi}</div> */}
      <img src={found.image} alt="" />
      <div>ID: {found.id}</div>
      <div>Name: {found.name}</div>
      <div>Price: {found.price}</div>
      <div>Category: {found.category}</div>
      <div>Description: {found.description}</div>
    </div>
  );
}

export default SingleProduct;
