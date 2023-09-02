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
                <div>{product.title}</div>
                <div>{product.price}</div>
                <div>{product.thumbnail}</div>
                <br />
            </div>
            
        )}
    </div>
  )
}

export default Tooted