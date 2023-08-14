import React from 'react';
import {useState } from 'react';
import joogidFail from "../data/joogidFail.json"

function Avaleht() {
    const [joogid, uJoogid] = useState(joogidFail);
  return (
    <div>
        {joogid.map((element, index) => (
        <div>
          <span>{element}</span>
        </div>
      ))}
    </div>
  )
}

export default Avaleht