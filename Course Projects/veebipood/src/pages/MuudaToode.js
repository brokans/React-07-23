import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import tootedFailist from "../data/tooted.json";
import { useRef } from "react";

function MuudaToode() {
  // tagastab antud objekti URL'i
  const { index } = useParams();
  const leitud = tootedFailist[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  // nupuvajutusega navigeerimiseks vaja importida
  const navigate = useNavigate();
  // use'd on Reacti HOOKid ehk Reacti erikood, selle abil React lihtsustab JS'i
  // Reeglid:
  // kõik algavad use- eesliidesega
  // kõik tuleb importida
  // alati on sulg lõpus ehk ta tuleb käivitada
  // ei tohi olla funktsiooni sees loodud
  // ei tohi olla dünaamiliselt loodud

  const muuda = () => {
    // muudatuste  salvestamine vastavalt sisestatud tekstile
    tootedFailist[index] = {
      nimi: nimiRef.current.value,
      hind: Number(hindRef.current.value),
      pilt: piltRef.current.value,
      aktiivne: aktiivneRef.current.checked,
    };
    // navigeerib antud lehele nupule vajutades
    navigate("/haldaTooteid");
  };

  if (leitud === undefined) {
    return <div>Toodet ei leitud!</div>;
  }
  return (
    <div>
      <label htmlFor="">Toote nimi</label>
      <br />
      {/*  jätab muudetava toote nime inputi */}
      <input ref={nimiRef} defaultValue={leitud.nimi} type="text" />
      <br />
      <label htmlFor="">Toote hind</label>
      <br />
      <input ref={hindRef} defaultValue={leitud.hind} type="number" />
      <br />
      <label htmlFor="">Toote pilt</label>
      <br />
      <input ref={piltRef} defaultValue={leitud.pilt} type="text" />
      <br />
      <label htmlFor="">Toote aktiivsus</label>
      <br />
      <input
        ref={aktiivneRef}
        defaultChecked={leitud.aktiivne}
        type="checkbox"
      />
      <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  );
}

export default MuudaToode;
