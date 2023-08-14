import React, { useState } from "react";
import ostukorviFailist from "../data/ostukorv.json";
import { ToastContainer, toast } from 'react-toastify';
import tootedFailist from "../data/tooted.json";
import {Link} from "react-router-dom";


function Tooted() {
  const [tooted, uTooted] = useState(tootedFailist);
  
  const lisaOstukorvi = (klikitudToode) => {
    ostukorviFailist.push(klikitudToode);
    toast.success("Toode ostukorvi lisatud!");
  }
  
  return (
    <div>
      <div>Tooted</div>
      <br />
      {tooted.map((toode, index) => (
        <div>
          {index}
          <img className="pilt" src={toode.pilt} alt="" />
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          <div>{toode.aktiivne}</div>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa Ostukorvi</button>{" "}
          {/* muutuval url'il on loogelised ümber, lisab tootele järjekorra numbri */}
          <Link to={"/yksToode/" + index}>
            <button>Vaata detailsemalt</button>
          </Link>
        </div>
      ))}
      {/* võib olla igalpool, nii üleval kui all */}
      <ToastContainer 
          position="top-right"
          autoClose={2000}
          theme="dark"
        />
    </div>
  );
}

export default Tooted;
