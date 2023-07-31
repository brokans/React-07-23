import React, { useState } from 'react'

function Seaded() {
    const[keel, uuendaKeel] = useState("est");
    // let kasutaja = "asdasdas";

    // const uuendaKasutaja = () => {
    //     kasutaja = "qwqwqwqw"
        // console.log(kasutaja)
    // }

    // KODUTÖÖ: LOCALSTORAGE
  return (
    <div>
        <button onClick={() => uuendaKeel("est")}>Muuda leht eesti keelseks</button>
        <button onClick={() => uuendaKeel("eng")}>In English</button>
        <button onClick={() => uuendaKeel("rus")}>Ruskii</button>
        {keel === "est" && <div>Leht on eesti keelne</div>}
        {keel === "eng" && <div>Page is in English</div>}
        {keel === "rus" && <div>Ruskii Isõk</div>}
        {/* {kasutaja} */}
    </div>
  )
}

export default Seaded