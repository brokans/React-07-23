import React, { useState } from "react";
import productsFromFile from "../../data/products.json";

function HomePage() {
  // const { t } = useTranslation();
  const [products, setProducts] = useState(productsFromFile);

  return (
     
    <div>
      <div>Total products: {products.length} pcs</div>
        <button>Sort A-Z</button>
        <button>Sort Z-A</button>
        <button>Sort price asc</button>
        <button>Sort price desc</button>
        <br /><br />
        <button>Memory Bank</button>
        <button>Usb Drive</button>
        <button>Tent</button>
        <button>Camping</button>
      {productsFromFile.map((product) => (
      <div key={product.id}>
        <img src={product.image} alt="" />
        <br />
        {product.name}
        {product.price}
        <br />
        <button>add-to-cart</button>
        <br /><br />
        
      </div>
      
      ))}</div>
  );
}

export default HomePage;
