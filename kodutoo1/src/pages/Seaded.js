import React, {useState} from 'react'

function Seaded() {

const[kujundus, mKujundus] = useState(localStorage.getItem("veebilehe_kujundus"));

const tumeLeht = () => {
    localStorage.setItem("veebilehe_kujundus", "dark_mode");
    mKujundus("dark_mode");
}

const heleLeht = () => {
    localStorage.setItem("veebilehe_kujundus", "light_mode");
    mKujundus("light_mode");
}

  return (
    <div>
        <br />
        <button onClick={tumeLeht}>Tume režiim</button>
        <button onClick={heleLeht}>Hele režiim</button>
        {kujundus === "dark_mode"  && <div>TUME REŽIIM</div>}
        {kujundus === "light_mode" && <div>HELE REŽIIM</div>}
    </div>
  )
}

export default Seaded