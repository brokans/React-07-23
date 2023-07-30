import React, { useRef, useState } from 'react'


function LisaTegelane() {
    const[sonum, uuendaSonum] = useState("")
    const tegelaseRef = useRef();

    const lisa = () => {
        if (tegelaseRef.current.value === "") {
            uuendaSonum("Sisesta tegelase nimi.")
        } else {
            uuendaSonum("Tegelane lisatud: " + tegelaseRef.current.value);
        }
    }

  return (
    <div>
        <div><h1>Lisa Tegelane</h1></div><br />
        <div>{sonum}</div>
        <label>Tegelase nimi: </label>
        <input ref={tegelaseRef} type="text" />
        <button onClick={lisa}>Lisa uus</button>


    </div>
  )
}


export default LisaTegelane
