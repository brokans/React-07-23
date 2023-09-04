import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Tooted() {
    const [products, uProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((json) =>  uProducts(json.products))
    }, []);
  return (
    <div>
        {products.map((product) =>
            <div>
                <br />
                <div>Toote nimi: {product.title}</div>
                <div>Hind: {product.price}</div>
                <img src={product.thumbnail} alt="" /> 
                <br />
                <br />
            </div>
            
        )}
    </div>
  )
}

export default Tooted