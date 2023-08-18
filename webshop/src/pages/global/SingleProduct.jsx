import React from "react";
import { useParams } from "react-router-dom";
import productsFromFile from "../../data/products.json";

function SingleProduct() {
  const {} = useParams;

  // Millegi pärast ei leia toodet üles


  const found = productsFromFile.find(product => {
    return product.id;
  });

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
      <div>ID: {found.id}</div>
      <div>Name: {found.name}</div>
      <div>Price: {found.price}</div>
      <div>Category: {found.category}</div>
      <div>Description: {found.description}</div>
      <img src={found.image} alt="" />
    </div>
  );
}

export default SingleProduct;
