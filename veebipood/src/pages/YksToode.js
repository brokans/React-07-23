import React from 'react';
import {useParams} from "react-router-dom";
import tootedFailist from "../data/tooted.json"

function YksToode() {
  // Kui on kandilised sulud siis peab olema täpset selline arv muutujaid
  // mille ette antakse (useState poolt)
  // const [kogus, uuendaKogus]
  // kui on loogselised, siis võib olla mitu tahes
  // peab olema sama mis app.js Link's 
  const {jrknr} = useParams();
  // const {id, name} = useSearchParams(); 

  const leitud = tootedFailist[jrknr];
  // undefined
  if (leitud === undefined){
    return <div>Tooteid ei leitud!</div>
  }
  

  return (
    <div>
      <div>Toote järjekorranumber: {jrknr}</div>
      <div>Toote nimi: {leitud.nimi}</div>
      <div>Toote hind: {leitud.hind}</div>
      <div>Toote kirjeldus: ....</div>
      <img src={leitud.pilt} alt="" />

    </div>
  )
}

export default YksToode