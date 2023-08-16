import React, { useState } from "react";
import ostukorviFailist from "../data/ostukorv.json";
import { ToastContainer, toast } from "react-toastify";
import tootedFailist from "../data/tooted.json";
import { Link } from "react-router-dom";
// Kellaaeg 1:42 videol
function Tooted() {
  const [tooted, uTooted] = useState(tootedFailist.filter(toode => toode.aktiivne === true));

  const lisaOstukorvi = (klikitudToode) => {
    ostukorviFailist.push(klikitudToode);
    toast.success("Toode ostukorvi lisatud!");
  };

  const sorteeriAZ = () => {
    tooted.sort((a, b) => a.nimi.localeCompare(b.nimi, "et"));
    uTooted(tooted.slice());
  };

  const sorteeriZA = () => {
    // võrdlemiseks kasutatakse localCompare, ka tagurpidi, "et" näitab keelt mille järgi sorteeritakse
    tooted.sort((a, b) => b.nimi.localeCompare(a.nimi, "et"));
    uTooted(tooted.slice());
  };

  const sorteeriHindKasv = () => {
    tooted.sort((a, b) => a.hind - b.hind);
    uTooted(tooted.slice());
  };

  const sorteeriHindKah = () => {
    tooted.sort((a, b) => b.hind - a.hind);
    uTooted(tooted.slice());
  };



  const filtreeriAlgabA = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("A"));
    uTooted(vastus);
  }

  const filtreeriAlgabB = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("B"));
    uTooted(vastus);
  }
  const filtreeriAlgabN = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("F"));
    uTooted(vastus);
  }
  const filtreeriAlgabT = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("K"));
    uTooted(vastus);
  }

  return (
    <div>
      <div>Tooted</div>
      <br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriHindKasv}>Hind kasvavalt</button>
      <button onClick={sorteeriHindKah}>Hind kahanevalt</button>
      <br />
      <button onClick={filtreeriAlgabA}>A</button>
      <button onClick={filtreeriAlgabB}>B</button>
      <button onClick={filtreeriAlgabN}>F</button>
      <button onClick={filtreeriAlgabT}>K</button>
      <br />
      <br />
      {tooted.map((toode) => (
        <div key={toode.nimi}>
          <img className="pilt" src={toode.pilt} alt="" />
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          <div>{toode.aktiivne}</div>
          <button onClick={() => lisaOstukorvi(toode)}>
            Lisa Ostukorvi
          </button>{" "}
          {/* muutuval url'il on loogelised ümber, lisab tootele järjekorra numbri */}
          <Link to={"/yksToode/" + toode.nimi}>
            <button>Vaata detailsemalt</button>
          </Link>
          <br />
          <br />
        </div>
      ))}
      {/* võib olla igalpool, nii üleval kui all */}
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
}

export default Tooted;
