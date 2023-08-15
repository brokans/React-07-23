import React, { useRef, useState } from "react";
import poedFailist from "../data/poed.json";
import { Link } from "react-router-dom";
import YksikPood from "./YksikPood";

// JAVASCRIPT
function Poed() {
  const [poed, uPoed] = useState(poedFailist);
  // salvestab inputi sisestatud teksti
  // USEREFID
  const poodViide = useRef();
  const aegViide = useRef();
  const telViide = useRef();

  const reset = () => {
    uPoed(poedFailist);
  };
  // Lisa uus pood
  const lisa = () => {
    poed.push({
      nimi: poodViide.current.value,
      aeg: aegViide.current.value,
      tel: telViide.current.value,
    });
    uPoed(poed.slice());
  };

  // SORTEERI
  const sorteeriAZ = () => {
    poed.sort((a, b) => a.nimi.localeCompare(b.nimi, "et"));
    uPoed(poed.slice());
  };

  const sorteeriZA = () => {
    // võrdlemiseks kasutatakse localCompare, ka tagurpidi, "et" näitab keelt mille järgi sorteeritakse
    poed.sort((a, b) => b.nimi.localeCompare(a.nimi, "et"));
    uPoed(poed.slice());
  };

  const sorteeriT2htedeArvKasv = () => {
    poed.sort((a, b) => a.nimi.length - b.nimi.length);
    uPoed(poed.slice());
  };

  const sorteeriT2htedeArvKah = () => {
    poed.sort((a, b) => b.nimi.length - a.nimi.length);
    uPoed(poed.slice());
  };

  const sorteeriKolmasT2htAZ = () => {
    poed.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));
    uPoed(poed.slice());
  };

  // FILTRID
  const filtreeriEgaLoppevad = () => {
    // salvestab sõnad mis lõpevad e'ga
    const vastus = poed.filter((yksPood) => yksPood.nimi.endsWith("e"));
    uPoed(vastus);
  };
  // sõna on pikem kui 9 tähte
  const filtreeri9T2haliesed = () => {
    const vastus = poed.filter((yksPood) => yksPood.nimi.length === 9);
    uPoed(vastus);
  };
  // 7 või rohkem tähte
  const filtreeriV2hemalt7T2helised = () => {
    const vastus = poed.filter((yksPood) => yksPood.nimi.length >= 7);
    uPoed(vastus);
  };
  // sisaldab is
  const filtreeriKesSisaldabIsLyhendit = () => {
    const vastus = poed.filter((yksPood) => yksPood.nimi.includes("is"));
    uPoed(vastus);
  };
  // Kolmas täht sõnas on i
  const filtreeriKelleKolmasTähtI = () => {
    const vastus = poed.filter((yksPood) => yksPood.nimi[2] === "i");
    uPoed(vastus);
  };

  // KOKKUARVUTUS - liidame kõik poodide tähtede arvud
  const arvutaKokku = () => {
    // let muutuja väärtus saab muutuda pidevalt
    let summa = 0;
    poed.forEach((yksPood) => (summa = summa + yksPood.nimi.length));
    return summa;
  };

  function kustuta(index) {
    poed.splice(index, 1);
    uPoed(poed.slice());
  }

  return (
    // HTML
    <div>
      <button onClick={reset}>Reset</button>
      <div>Poode: {poed.length} tk</div>
      <div>Tähemärke: {arvutaKokku()} </div>
      <br />
      {/* POODIDE LISAMINE */}
      {/* Poe nimi */}
      <label htmlFor="">Poe nimi </label> <br />
      <input ref={poodViide} type="text" name="" id="" /> <br />
      {/* Lahtioleku aeg */}
      <label htmlFor="">Lahtioleku aeg </label> <br />
      <input ref={aegViide} type="text" name="" id="" /> <br />
      {/* telefoni number */}
      <label htmlFor="">Telefoni number </label> <br />
      <input ref={telViide} type="text" name="" id="" /> <br />
      <button onClick={lisa}>Lisa</button> <br /> <br />
      {/* SORTEERIMISNUPUD */}
      <div>Sorteeri: </div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriT2htedeArvKasv}>Kasvavalt</button>
      <button onClick={sorteeriT2htedeArvKah}>Kahanevalt</button>
      <button onClick={sorteeriKolmasT2htAZ}>Sorteeri kolmas täht A-Z</button>
      <br />
      {/* FILTREERIMISNUPUD */}
      <div>Filtreeri:</div>
      <button onClick={filtreeriEgaLoppevad}>E'ga lõppevad</button>
      <button onClick={filtreeri9T2haliesed}>9 tähelised</button>
      <button onClick={filtreeriV2hemalt7T2helised}>Vähemalt 7 tähte</button>
      <button onClick={filtreeriKesSisaldabIsLyhendit}>is lühendiga</button>
      <button onClick={filtreeriKelleKolmasTähtI}>Kolmas täht i</button>
      {/* Kuvab poodide nimed */}
      {poed.map((element, index) => (
        <div key={YksikPood.nimi}>
          <span>
            {element.nimi} {element.aeg} {element.tel}
          </span>
          {/*ÜHE POE VAATAMINE  */}
          <Link to={"/yksikPood/" + index}>
            <button>Detailsem</button>
          </Link>
          {/* Kustutamisnupp */}
          <button onClick={() => kustuta(index)}>X</button>
        </div>
      ))}{" "}
    </div>
  );
}

export default Poed;
