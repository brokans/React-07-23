import React from 'react';
import {useRef, useState } from 'react';
import joogidFail from "../data/joogidFail.json"

function Halda() {
    
    
      const [joogid, uJoogid] = useState(joogidFail);
      const joogidRef = useRef();
    
      function kustuta(index) {
        joogid.splice(index, 1);
        uJoogid(joogid.slice());
      }
    
      


  return (
    <div>
        Tooted:
      {joogid.map((element, index) => (
        <div>
          <span>{element}</span>
          <button onClick={() => kustuta(index)}>X</button>
        </div>
      ))}
      <br />
      
    </div>
  )
}

export default Halda