import React, { useState } from "react";
import tootedFailist from "../data/tooted.json";
import { Link} from 'react-router-dom';

function HaldaTooted() {
  const [tooted, uTooted] = useState(tootedFailist);

  const kustuta = (jrknr) => {
    tooted.splice(jrknr, 1); // sellest alates mitu tk
    uTooted(tootedFailist.slice());
  };
  return (
    <div>
      {/* kuvab tooted koos järjekorra numbriga */}
      {tooted.map((toode, jrknr) => (
        // Kui toode on aktiivne siis üks css, kui mitte siis teine
        <div key={toode.nimi} className={toode.aktiivne === true ? "aktiivne" : "mitteaktiivne"}>
          {jrknr}
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          <img className="pilt" src={toode.pilt} alt="" />
          <br />
          <button onClick={() => kustuta(jrknr)}>Kustuta</button>
          {/* Vajutades nupul muuda suunab muudaToode lehele */}
          <Link to={"/muudaTooted/" + jrknr}>
            <button>Muuda</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HaldaTooted;
