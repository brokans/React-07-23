import React, { useState } from 'react';
import { Link } from "react-router-dom";


function HaldaUudiseid() {
    const [uudised, uUudised] = useState(JSON.parse(localStorage.getItem("uudised")) || []);


    function kustuta(index) {
        uudised.splice(index,1);
        uUudised(uudised.slice());
        localStorage.setItem("uudised", JSON.stringify(uudised));
    }

  return (
    <div>
        <div> {uudised.map((uudis, index) => 
        <div key={index}>
            <div> {uudis} </div>
            <button onClick={() => kustuta(index)}>X</button>
            <Link to={"/muuda-uudis/" + index}>
              <button>Muuda</button>
            </Link>
        </div> 
        )}</div>
    </div>
  )
}

export default HaldaUudiseid