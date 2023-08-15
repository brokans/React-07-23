import React from 'react';
import {useState } from 'react';
import joogidFail from "../data/joogidFail.json"
import { Link } from 'react-router-dom';

function Avaleht() {
    const [joogid, uJoogid] = useState(joogidFail);
  return (
    <div>
        {joogid.map((element, index) => (
        <div>
          {/* Lingib jookide nimed Jook.js lehega */}
          <Link to={"jook/" + index}>
            <span>{element}</span>
          </Link>
          
        </div>
      ))}
    </div>
  )
}

export default Avaleht