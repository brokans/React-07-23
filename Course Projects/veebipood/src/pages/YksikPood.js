import React from 'react'
import {useParams} from 'react-router-dom';
import poedFailist from '../data/poed.json';


function YksikPood() {
    const {index} = useParams();
    const leitud = poedFailist[index];

    if (leitud === undefined) {
      return <div>Poodi ei leitud</div>
    }

  return (
    <div>
        <div>Järjekorranumber: {index}</div>
        <div>Nimi: {leitud.nimi}</div>
        <div>Lahtioleku aeg: {leitud.aeg} </div>
        <div>Tel: {leitud.tel} </div>
        {/* {leitud === undefined && <div>Poodi ei leitud</div> } */}
        

    </div>
  )
}

export default YksikPood