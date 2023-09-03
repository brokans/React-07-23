import React, { useEffect } from 'react';
import {useRef, useState } from 'react';
// import joogidFail from "../data/joogidFail.json"
import config from "../data/config.json"


function Lisa() {
  const jookdRef = useRef();
  const [joogid, uJoogid] = useState([]);

  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then(res => res.json())
      .then(json => uJoogid(json || []))
  }, []);

  function addNewDrink() {
    joogid.push({"nimi": jookdRef.current.value});
    uJoogid(joogid.slice())
    fetch(config.joogidDbUrl, {
      method: "PUT",
      body: JSON.stringify(joogid)
   })
} 

      
  return (
    <div>
        <label htmlFor="">Lisa uus toode:</label>
        <br />
        <input ref={jookdRef} type="text" />
        <button onClick={() => addNewDrink()}>Sisesta</button>

        {joogid.map((element) => (
        <div key={element.nimi}>
          <div>{element.nimi}</div>
        </div>
      ))}

        
    </div>
  )
}

export default Lisa