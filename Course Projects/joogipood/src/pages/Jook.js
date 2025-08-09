import React, { useEffect, useRef, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import joogidFailist from '../data/joogidFail.json'
import config from "../data/config.json"


function Jook() {
  // const {number} = useParams();
  const [joogid, uJoogid] = useState([]);
  const joogifRef = useRef();

  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then(res => res.json())
      .then(json => uJoogid(json))

    fetch(config.joogidDbUrl, {
      method: "PUT",
      body: JSON.stringify(joogid)
    })

  }, [joogid]);

  // salvestab URL'i toote numbri
  const leitud = joogifRef();

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