import React, { useEffect } from 'react';
import {useState } from 'react';
// import joogidFail from "../data/joogidFail.json"
import config from "../data/config.json"


function Halda() {
      const [joogid, uJoogid] = useState([]);

      useEffect(() => {
        fetch(config.joogidDbUrl)
          .then(res => res.json())
          .then(json => uJoogid(json || []))
      }, []);
  
      function kustuta(index) {
        joogid.splice(index, 1);
        uJoogid(joogid.slice());
        fetch(config.joogidDbUrl, {
          method: "PUT",
          body: JSON.stringify(joogid)
        })

      }
    
  return (
    <div>
        Tooted:
      {joogid.map((jook, index) => (
        <div>
          <div>{jook.nimi}</div>
          <button onClick={() => kustuta(index)}>X</button>
        </div>
      ))}
      <br />
      
    </div>
  )
}

export default Halda