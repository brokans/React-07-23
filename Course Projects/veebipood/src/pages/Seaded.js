import React, { useState } from 'react'

function Seaded() {
  // Salvestab keele valiku lokaalselt
    const[keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est");
    // let kasutaja = "asdasdas";

    // const uuendaKasutaja = () => {
    //     kasutaja = "qwqwqwqw"
        // console.log(kasutaja)
    // }

    // KODUTÖÖ: LOCALSTORAGE
    const keelEE = () => {
      uuendaKeel("est");
      localStorage.setItem("keel", "est");
    }

    const keelEng = () => {
      uuendaKeel("eng");
      localStorage.setItem("keel", "eng");
    }
    const keelRus = () => {
      uuendaKeel("rus");
      localStorage.setItem("keel", "rus");
    }
  return (
    <div>
        <button onClick={keelEE}>Muuda leht eesti keelseks</button>
        <button onClick={keelEng}>In English</button>
        <button onClick={keelRus}>Ruskii</button>
        {keel === "est" && <div>Leht on eesti keelne</div>}
        {keel === "eng" && <div>Page is in English</div>}
        {keel === "rus" && <div>Ruskii Isõk</div>}
        {/* {kasutaja} */}
    </div>
  )
}

export default Seaded