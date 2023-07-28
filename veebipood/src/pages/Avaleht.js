import React, { useState } from 'react'

function Avaleht() {  // Muud moodi ei saagi väärtusi HTMLs muuta kui useState.
  const [kogus, uuendaKogus] = useState(1); // Reacti hook ehk Reacti erikood. Muudab väärtusi HTMLs
  const[laigitud, uuendaLaigitud] = useState(false); //lahend väärts ehk boolean 
  const[sonum, uuendaSonum] = useState("Muuda kogust!");
  
  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Tühjendasid ostukorvi!");
  }
  
  function vahenda() {
    uuendaKogus(kogus -1);
    uuendaSonum("Vähendasid kogust!!");
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Suurendasid kogust!");
  }

  return (
    <div>
      {laigitud === true && <img src="laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <span>{laigitud}</span>
      {laigitud === true && <button onClick ={() => uuendaLaigitud(false)}>Ei meeldi</button>}
      {laigitud === false && <button onClick ={() => uuendaLaigitud(true)}>Meeldib</button>}
      <br />
      <br />
      
      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <button disabled={kogus===0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
    
  )
}

export default Avaleht

// HTML:
// tumesinine - sissekirjutatud tüüp- reserveeritud sõnad - tag: img, button, div, span
// sinine - muutuja HTMLs
// helesinine - tagi tribuudid(omadused): onClick, className, src, alt, path, element, to
// kollane -  funktsioon
// valge - väljanäitav, märgid
// oranz/punane - sõna, jutumärkide vahel
// roheline - suure tähega roheline - importitud täg, peab olema import: <Avaleht/> <BrowserRouter/>

// JavaScript
// tumesinine - sissekirjutatud tüüp- reserveeritud sõnad: const, let, function, true, false, undefined, null
// tavaline sinine - muutujad
// helesinine -  muutuja võtmed(omadused): ref.current.value    .length
// kollane - funktsioon
// valge - märgid
// oranz/punane - sõna, jutumärkide vahel
// roheline- suure tähega roheline - imporditud klass
