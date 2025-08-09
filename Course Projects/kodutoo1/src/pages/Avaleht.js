import React from 'react'
import { useRef, useState } from 'react'

function Avaleht() {

  const[sisselogitud, mSisselogitud] = useState(false);
  const[sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();


  function logiSisse() {
    if (paroolRef.current.value==="123") {
      muudaSonum("Oled sisselogitud, " + kasutajaNimiRef.current.value); 
    } else {
      muudaSonum("Vale parool");
    }

  }

  function logiV2lja() {
    muudaSonum("Oled väljalogitud!");
  }



  return ( 
    <div className='App'>
      <div>{sonum}</div>
      <br />
      {sisselogitud === false && <div>
        <label htmlFor="">Kasutaja nimi</label><br />
        <input ref={kasutajaNimiRef} type="text" /><br />
        <label htmlFor="">Parool</label><br />
        <input ref={paroolRef} type="password" /><br />  
      </div>}
      <div onClick={logiSisse}>
      {sisselogitud===false&&<button onClick={() => mSisselogitud(true)}>Logi sisse</button>}
      </div>
      <div onClick={logiV2lja}>
        {sisselogitud===true &&<button onClick={() => mSisselogitud(false)} >Logi välja</button>}
      </div>
      
    </div>
  )
}

export default Avaleht