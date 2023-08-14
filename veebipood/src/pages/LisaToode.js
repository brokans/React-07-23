import React, { useRef, useState } from "react";
import tootedFailist from "../data/tooted.json";
import { ToastContainer, toast } from "react-toastify";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();
  const hindRef = useRef();

  const piltRef = useRef();
  const aktiivneRef = useRef();

  // function lisa(){}  // ES5

  // ES6
  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Palun sisestage toote nimi!");
      toast.error("Palun sisestage toote nimi!");
    } else if (inputiLuger.current.value.includes("!")) {
      uuendaSonum("Hüüumärgiga toodet ei saa lisada");
      toast.warning("Hüüumärgiga toodet ei saa lisada");
    } else {
      uuendaSonum("Toode edukalt lisatud: " + inputiLuger.current.value);
      toast.success("Toode ostukorvi lisatud! " + inputiLuger.current.value);
      tootedFailist.push({
        nimi: inputiLuger.current.value,
        // kui tüüp muutub tuleb siin ka muuta
        hind: Number(hindRef.current.value),
        pilt: piltRef.current.value,
        aktiivne: aktiivneRef.current.checked,
      });
    }
  };

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi: </label>
      <br />
      <input ref={inputiLuger} type="text" />
      <br />
      <label>Toote hind: </label>
      <br />
      <input ref={hindRef} type="number" />
      <br />
      <label>Toote pilt: </label>
      <br />
      <input ref={piltRef} type="text" />
      <br />
      <label>Toode aktiivne: </label>
      <br />
      {/* checkbox kui ei taha kuvada */}
      <input ref={aktiivneRef} type="checkbox" />
      <br />
      <button onClick={lisa}>Lisa</button> <br />
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
}

export default LisaToode;
