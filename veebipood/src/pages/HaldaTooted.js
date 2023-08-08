import React, { useState } from "react";
import tootedFailist from "../data/tooted.json"

function HaldaTooted() {
  const [tooted, uTooted] = useState(tootedFailist);

  const kustuta = (jrknr) => {
    tooted.splice(jrknr,1);     // sellest alates mitu tk
    uTooted(tootedFailist.slice())
  };
  return (
    <div>
      {tooted.map((toode, jrknr) => (
        <div>{" "}
          {toode} <button onClick={() => kustuta(jrknr)}>Kustuta</button>{" "}
        </div>
      ))}
    </div>
  );
}

export default HaldaTooted;
