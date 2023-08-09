import React, { useRef, useState } from "react";
import andjateFail from "../data/nimed.json";

function TagasisideAndja() {
  const [andjad, uAndjad] = useState(andjateFail);

  // FILTER M tähega algavad
  const filtreeriMgaAlgavad = () => {
    // salvestab sõnad mis lõpevad e'ga
    const vastus = andjad.filter((element) => element.startsWith("M"));
    uAndjad(vastus);
  };

  // FILTER ainult kuue tähega nimed
  const filterKuuesed = () => {
    // salvestab sõnad mis lõpevad e'ga
    const vastus = andjad.filter((element) => element.length === 6);
    uAndjad(vastus);
  };

  const yLoppevad = () => {
    // salvestab sõnad mis lõpevad e'ga
    const vastus = andjad.filter((element) => element.endsWith("y"));
    uAndjad(vastus);
  };
  // SORTEERIB Z-A
  const za = () => {
    // salvestab sõnad mis lõpevad e'ga
    andjad.sort((a, b) => b.localeCompare(a, "et"));
    uAndjad(andjad.slice());
  };

  const lisaEST = () => {
    // salvestab sõnad mis lõpevad e'ga
    const vastus = andjad.map((element) => "EST-" + element);
    uAndjad(vastus);
  };
  //   KUSTUTAB valitud nime
  const kustuta = (index) => {
    andjad.splice(index, 1);
    uAndjad(andjad.slice());
  };
    // SALVESTAB väljale kirjutatud teksti 
  const andjaRef = useRef();
  // LISAB väljale kirjutatud teksti nimekirja
  const lisa = () => {
    andjad.push(andjaRef.current.value);
    uAndjad(andjad.slice());
  };

  return (
    <div>
      <div>Nimesid on kokku {andjad.length} tk</div>
      <button onClick={filtreeriMgaAlgavad}>Filtreeri M'ga algavad </button>
      <button onClick={filterKuuesed}>Kuuekohalised Nimed</button>
      <button onClick={yLoppevad}>Y'ga lõppevad</button>
      <button onClick={za}>Z-A</button>
      <button onClick={lisaEST}>lisa EST</button>
      <br />
      <label htmlFor=""> Lisa uus nimi: </label>
      <input ref={andjaRef} type="text" name="" id="" />
      <button onClick={lisa}> Lisa </button>
      <br />
      {/* Saab iga nime eraldi kustutada */}
      {andjad.map((element, index) => (
        <div key={element}>
          {element}
          <button onClick={() => kustuta(index)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default TagasisideAndja;
