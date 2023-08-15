import React from 'react'
import { useParams } from 'react-router-dom'
import joogidFailist from '../data/joogidFail.json'


function Jook() {
  const {number} = useParams();
  // salvestab URL'i toote numbri
  const leitud = joogidFailist[number];
  return (
    <div>
      {/* Kuvab joogi nime */}
      {leitud}
      {/* Juhul kui ei leia jooki */}
      {leitud === undefined && <div>Jooki ei leitud</div> }
    </div>
  )
}

export default Jook