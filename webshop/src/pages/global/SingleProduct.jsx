import React from "react";
import { useParams } from "react-router-dom";
import productsFromFile from "../../data/products.json";

function SingleProduct() {
  const {productId} = useParams();
  const found = productsFromFile.find(product => product.id === Number(productId));

  // Millegi pärast ei leia toodet üles


  // const found = productsFromFile.find(product => {
  //   return product.id;
  // });

  // function found() {
  //   productsFromFile.find(product => {
  //     return product.id === id;
  //   })
  // }

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
