import React from 'react'
import {useParams} from 'react-router-dom';
import poedFailist from '../data/poed.json';


function YksikPood() {
    const {index} = useParams();
    const leitudPood = poedFailist[index];
  return (
    <div>
        <div>Järjekorranumber: {index}</div>
        <div>Nimi: {leitudPood.nimi}</div>
        <div>Lahtioleku aeg: {leitudPood.aeg} </div>
        <div>Tel: {leitudPood.tel} </div>

    </div>
  )
}

export default YksikPood