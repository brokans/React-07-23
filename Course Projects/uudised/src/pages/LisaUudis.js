import React, { useRef, useState } from "react";

function LisaUudis() {
  const [sonum, uSonum] = useState("");
  const uudisRef = useRef();

  function lisaUusUudis() {
    // LocalStorage'st kätte saamiseks
    let uudised = localStorage.getItem("uudised");
    // Jutumärkide eemaldamiseks
    uudised = JSON.parse(uudised) || [];
    // uudiste lisamiseks
    uudised.push(uudisRef.current.value);
    // Jutumärkide tagasi panemiseks
    uudised = JSON.stringify(uudised);
    // LocalStorage'sse tagasipanemiseks
    localStorage.setItem("uudised", uudised);
    uSonum("Uudis Lisatud!")
    // let uudised = JSON.parse(localStorage.getItem("uudised")) || [];
    // uudised.push(uudisRef.current.value);
    // localStorage.setItem("uudised", JSON.stringify(uudised));
  }

  function kontrolli() {
    if (uudisRef.current.value === "") {
      uSonum("");
    } else if (
      uudisRef.current.value.charAt(0) ===
      uudisRef.current.value.charAt(0).toLowerCase()
    ) {
      uSonum("Alustage uudist suure tähega!");
    } else if (uudisRef.current.value.includes("  ")) {
      uSonum("Kaks järjestikust tühikut!");
    } else if (!uudisRef.current.value.includes("  ")) {
      uSonum("");
    }
    
  }

  return (
    <div>
      <div>{sonum}</div>
      <label htmlFor="">Uudise nimi:</label> <br />
      <input onChange={kontrolli} ref={uudisRef} type="text" /> <br />
      <button onClick={lisaUusUudis}>Lisa uudis!</button>
    </div>
  );
}

export default LisaUudis;
