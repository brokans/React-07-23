import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';



function MuudaUudis() {
    const {index} = useParams();
    const uudised = JSON.parse(localStorage.getItem("uudised") || []);
    const found = uudised[index];

    const uudisRef = useRef();
    // 
    function muuda(){
        uudised[index] = uudisRef.current.value;
        localStorage.setItem("uudised", JSON.stringify(uudised));
    }
    
  return (
    <div>
        <label htmlFor="">Muuda uudist:</label> <br />
        <input ref={uudisRef} defaultValue={found} type="text" /> <br /> <br />
        <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaUudis