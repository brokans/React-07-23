import React, { useRef, useState } from 'react';
import tootedFailist from "../data/tooted.json";
import { ToastContainer, toast } from 'react-toastify';


function LisaToode() {
const [sonum, uuendaSonum] = useState("Lisa toode!");
const inputiLuger = useRef();
// function lisa(){}  // ES5

// ES6
const lisa = () => {
  if(inputiLuger.current.value === "") {
    uuendaSonum("Palun sisestage toote nimi!");
    toast.error("Palun sisestage toote nimi!");
  } else if (inputiLuger.current.value.includes("!")) {
    uuendaSonum("Hüüumärgiga toodet ei saa lisada");
    toast.warning("Hüüumärgiga toodet ei saa lisada");

  }  else {
    uuendaSonum("Toode edukalt lisatud: "+  inputiLuger.current.value);
    toast.success("Toode ostukorvi lisatud! " + inputiLuger.current.value);
    tootedFailist.push(inputiLuger.current.value);
  }
  
}

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi: </label><br />
      <input ref={inputiLuger}  type="text" /><br />
      <button onClick={lisa}>Lisa</button> <br />
      <ToastContainer 
          position="top-right"
          autoClose={2000}
          theme="dark"
        />
    </div>
  )
}

export default LisaToode