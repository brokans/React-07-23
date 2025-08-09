import React from 'react'
import { useState } from 'react'

function Loader() {
    const [kasLaeb, uLaadimist] = useState(true);
  return (
    <div>
        {/* Loader on selles divis */}
        {kasLaeb===true &&<div class='lds-circle'><div></div></div>}
        <br />
        <button onClick={() => uLaadimist(false)}>Lõpeta laadimine</button>
    </div>
  )
}

export default Loader