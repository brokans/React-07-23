import React, { useRef, useState } from 'react'
import { useActionData } from 'react-router-dom'

function LisaToode() {
const [sonum, uuendaSonum] = useState("Lisa toode!");
const inputiLuger = useRef();
// function lisa(){}  // ES5

// ES6
const lisa = () => {
  if(inputiLuger.current.value === "") {
    uuendaSonum("Palun sisestage toote nimi.")
  } else {
    uuendaSonum("Toode edukalt lisatud: "+  inputiLuger.current.value);
  }
  
}

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi: </label><br />
      <input ref={inputiLuger}  type="text" /><br />
      <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode