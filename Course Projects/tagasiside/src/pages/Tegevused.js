import React, { useState } from "react";
import tegevusedFail from "../data/tegevused.json";

function Tegevused() {
  const [tegevused, uTegevused] = useState(tegevusedFail);

  const n2itaKasutajaYks = () => {
    const vastus = tegevused.filter((element) => element.userId === 1);
    uTegevused(vastus);
  };

  const n2itaKasutajaKaks = () => {
    const vastus = tegevused.filter((element) => element.userId === 2);
    uTegevused(vastus);
  };

  const n2itaKasutajaKolm = () => {
    const vastus = tegevused.filter((element) => element.userId === 3);
    uTegevused(vastus);
  };

  const n2itaValmisTegevused = () => {
    const vastus = tegevused.filter((element) => element.completed === true);
    uTegevused(vastus);
  };

  const n2itaMitteValmisTegevused = () => {
    const vastus = tegevused.filter((element) => element.completed === false);
    uTegevused(vastus);
  };

  const algabTga = () => {
    const vastus = tegevused.filter((element) => element.title.startsWith("t"));
    uTegevused(vastus);
  };

  const rohkemKui20 = () => {
    const vastus = tegevused.filter((element) => element.title.length > 20);
    uTegevused(vastus);
  };

  const n2itaK6iki = () => {
    uTegevused(tegevusedFail);
  };
  return (
    <div>
      <div>Tegevuste arv: {tegevused.length}</div>
      <button onClick={() => n2itaKasutajaYks()}>
        Kuva kõik kasutaja ID 1 tegevused
      </button>
      <button onClick={() => n2itaKasutajaKaks()}>
        Kuva kõik kasutaja ID 2 tegevused
      </button>
      <button onClick={() => n2itaKasutajaKolm()}>
        Kuva kõik kasutaja ID 3 tegevused
      </button>
      <button onClick={() => n2itaValmisTegevused()}>
        Kuva kõik valmis tegevused
      </button>
      <button onClick={() => n2itaMitteValmisTegevused()}>
        Kuva kõik mitte valmis tegevused
      </button>
      <button onClick={() => algabTga()}>
        Kuva kõik "t" tähega algavad tegevused
      </button>
      <button onClick={() => rohkemKui20()}>
        Kuva kõik tegvused millel on rohkem kui 20 tähemärki
      </button>
      <button onClick={() => n2itaK6iki()}>Kuva kõik tegevused tagasi</button>
      {tegevused.map((element) => (
        <div>
          <div>userID: {element.userId}</div>
          <div>id: {element.id}</div>
          <div>Title: {element.title}</div>
          <div>{element.completed}</div>
        </div>
      ))}
    </div>
  );
}

export default Tegevused;
