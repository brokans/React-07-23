import React, { useState } from 'react';
import productsFromFile from "../../data/products.json"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);

  const { t } = useTranslation();


  function deleteProduct(index) {
    products.splice(index, 1);
    setProducts(products.slice());
  }

  return (
    <div>
      {products.map((product, index) => (
        <div>
          <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <button onClick={() => deleteProduct(index)}>{t("delete")}</button>
          <Button as={Link} to={"/admin/edit-product/" + product.id}>{t("edit")}</Button>
          <br /> <br />
        </div>
      ))}
      
      
      
      
      
    </div>
  )
}

export default MaintainProducts