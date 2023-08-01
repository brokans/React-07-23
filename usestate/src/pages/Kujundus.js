import React, { useState } from 'react'

function Kujundus() {
    const[valitud, uValitud] = useState("family");

  return (
    <div>
        <span
            className={valitud === "family" ? "pakett-aktiivne" : "pakett"} 
            onClick={() => uValitud("family")}>
            Family
        </span>
        <span 
            className={valitud === "standard" ? "pakett-aktiivne" : "pakett"} 
            onClick={() => uValitud("standard")}>
            Standard
        </span>
        <span 
            className={valitud === "mini" ? "pakett-aktiivne" : "pakett"} 
            onClick={() => uValitud("mini")}>
            Mini
        </span>
    </div>
  )
}

export default Kujundus