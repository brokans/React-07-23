import React, { useState } from "react";
import { Link } from "react-router-dom";
import OstukorviFailist from "../data/ostukorv.json";

// rfce lühend teeb põhja
function Ostukorv() {
  const [ostukorv, uOstukorv] = useState(OstukorviFailist);

  // ostukorvi lisamine
  const lisa = (klikitudToode) => {
    ostukorv.push(klikitudToode); // iga nupuvajutus peab olema erinev (dünaamiline)
    uOstukorv(ostukorv.slice());
  };

  //ostukorvist kustutamine
  const kustuta = (jrknr) => {
    ostukorv.splice(jrknr, 1); // sellest alates mitu tk
    uOstukorv(ostukorv.slice());
  };

  //ostukorvi tühjendamine
  const tyhjenda = () => {
    ostukorv.splice(0); // alates nullindast kustutab kõik ära
    uOstukorv(ostukorv.slice());
  };

  const ostukorviSumma = () => {
    let summa = 0;
    ostukorv.forEach((toode) => (summa = summa + toode.hind));
    return summa;
  };

  return (
    <div>
      <div>
        {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
        {ostukorv.length > 0 && (
          <div>Ostukorvis on {ostukorv.length} toodet</div>
        )}
        {/* dünaamika: mingil juhul on märge ostukorv on tühi, mingil juhul mitte */}
        {ostukorv.map((toode, jrknr) => (
          <div key={jrknr}>
            {jrknr}
            <div>{toode.nimi}</div>
            <div>{toode.hind}€</div>
            <img className="pilt" src={toode.pilt} alt="" />
            <button onClick={() => lisa(toode)}>+</button>{" "}
            <button onClick={() => kustuta(jrknr)}>x</button>{" "}
            <br />
          </div>
        ))}
      </div>
      {/* Dünaamika: ostukorv on tühi kui esemed nullis ja ei näita teksti, kui esemeid on */}
      {ostukorv.length === 0 && (
        <>
          <div>Ostukorv on tühi</div>
          <Link to="/tooted">E-Poodi</Link>
        </>
      )}
      <br /> <br />
      {ostukorv.length > 0 && <div>Kogusumma: {ostukorviSumma()}€</div>}
    </div>
  );
}

export default Ostukorv;

// kus teen "npm start" - sinna tulevad koodivead
// kompileerimise vead ehk:
// 1. import tegemata
// 2. muutuja seos vale
// 3. HTML pole üks komplekt

// run-time error ehk käimasolemise error
// r-click -> inspect-> console
// 1. className --> v täht
// 2. URL vale
