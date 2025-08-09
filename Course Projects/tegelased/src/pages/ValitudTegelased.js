import React from "react";
import { useState } from "react";

function ValitudTegelased() {
  const [valitudTegelased, uValitudTegelased] = useState(
    JSON.parse(localStorage.getItem("valitudTegelased") || [])
  );

  function eemalda(index) {
    valitudTegelased.splice(index, 1);
    uValitudTegelased(valitudTegelased.slice());
    localStorage.setItem("valitudTegelased", JSON.stringify(valitudTegelased));
  }

  function tyhjenda() {
    valitudTegelased.splice(0);
    uValitudTegelased(valitudTegelased.slice());
    localStorage.setItem("valitudTegelased", JSON.stringify(valitudTegelased));
  }

  return (
    <div>
      {valitudTegelased.length === 0 && (
        <div>Ühtegi tegelast pole valitud!</div>
      )}
      {valitudTegelased.length > 0 && (
        <button onClick={tyhjenda}>Tühjenda</button>
      )}{" "}
      <br />
      {valitudTegelased.length > 1 && (
        <div>Tegelasi valitud: {valitudTegelased.length}</div>
      )}{" "}
      <br />
      {valitudTegelased.map((tegelane, index) => (
        <div>
          <div>{tegelane.eesnimi}</div>
          <div>{tegelane.perenimi}</div>
          <div>{tegelane.elukoht}</div>
          <div>{tegelane.vanus}</div>
          <button onClick={() => eemalda(index)}>Eemalda</button>
        </div>
      ))}
    </div>
  );
}

export default ValitudTegelased;
