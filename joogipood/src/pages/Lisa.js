import React from 'react';
import {useRef, useState } from 'react';
import joogidFail from "../data/joogidFail.json"

function Lisa() {
    function newDrink() {
        joogid.push(joogidRef.current.value);
        uJoogid(joogid.slice());
      } 

      const [joogid, uJoogid] = useState(joogidFail);
      const joogidRef = useRef();
    
      
  return (
    <div>
        <label htmlFor="">Lisa uus toode:</label>
        <br />
        <input ref={joogidRef} type="text" />
        <button onClick={() => newDrink()}>Sisesta</button>

        {joogid.map((element, index) => (
        <div>
          <span>{element}</span>
        </div>
      ))}

        
    </div>
  )
}

export default Lisa