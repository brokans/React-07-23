import React, { useState } from 'react';
import productsFromFile from "../../data/products.json"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);

  return (
    <div>
      {productsFromFile.map((product) => (
        <div>
          <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <button>Delete</button>
          <Button as={Link} to={"/admin/edit-product/" + product.id}>Edit</Button>
        </div>
      ))}
      
      
      
      
      
    </div>
  )
}

export default MaintainProducts