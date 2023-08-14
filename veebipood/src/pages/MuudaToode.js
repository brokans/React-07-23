import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import tootedFailist from "../data/tooted.json";
import { useRef } from 'react';

function MuudaToode() {
  // tagastab antud objekti URL'i
  const {index} = useParams();
  const leitud = tootedFailist[index];
  const nimiRef = useRef();

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
    tootedFailist[index] = nimiRef.current.value;
    // navigeerib antud lehele nupule vajutades
    navigate("/haldaTooteid")
  }
  return (
    <div>
      <label htmlFor="">Toote nimi</label><br />
      {/*  jätab muudetava toote nime inputi */}
      <input ref={nimiRef} defaultValue={leitud} type="text" /><br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaToode