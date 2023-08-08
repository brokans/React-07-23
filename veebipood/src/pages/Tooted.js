import React, { useState } from "react";
import ostukorviFailist from "../data/ostukorv.json";
import { ToastContainer, toast } from 'react-toastify';
import tootedFailist from "../data/tooted.json";


function Tooted() {
  const [tooted, uTooted] = useState(tootedFailist);
  
  const lisaOstukorvi = (klikitudToode) => {
    ostukorviFailist.push(klikitudToode);
    toast.success("Toode ostukorvi lisatud!");
  }
  
  return (
    <div>
      {tooted.map((toode) => (
        <div>
          {toode}{" "}
          <button onClick={() => lisaOstukorvi(toode)}>Lisa Ostukorvi</button>{" "}
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
