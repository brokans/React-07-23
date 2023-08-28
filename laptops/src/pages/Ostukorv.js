import React from 'react'
import { useState } from 'react'

function Ostukorv() {
    const [ostukorv, uOstukorv] = useState(JSON.parse(localStorage.getItem("cartLaptops")) || []);

    function kustuta(index){
        ostukorv.splice(index, 1);
        uOstukorv(ostukorv.slice());
        localStorage.setItem("cartLaptops", JSON.stringify(ostukorv));
    }


  return (
    <div>
        <div>
            {ostukorv.map((ostukorviEse, index) =>
                <div key={index}>
                    <div> {ostukorviEse.mark} </div>
                    <div> {ostukorviEse.mudel} </div>
                    <div> {ostukorviEse.maksumus} </div>
                    <button onClick={() => kustuta(index)}>x</button>
                </div> 
                
            )}
        </div>
    </div>
  )
}

export default Ostukorv