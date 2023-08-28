import React, { useRef, useState } from "react";

function LisaTegelane() {
  const [sonum, uSonum] = useState("");
  const nimiRef = useRef();
  const perenimiRef = useRef();
  const elukohtRef = useRef();
  const vanusRef = useRef();

  const lisa = () => {
    if (nimiRef.current.value === "") {
      uSonum("Sisesta tegelase nimi!");
    } else {
      uSonum("Tegelane lisatud: ");
      const tegelased = JSON.parse(localStorage.getItem("tegelased") || []);
      tegelased.push({
        eesnimi: nimiRef.current.value,
        perenimi: perenimiRef.current.value,
        elukoht: elukohtRef.current.value,
        vanus: Number(vanusRef.current.value),
      });
      localStorage.setItem("tegelased", JSON.stringify(tegelased));
    }
  };

  return (
    <div>
      <div>
        <h1>Lisa Tegelane</h1>
      </div>
      <br />
      <div>{sonum}</div>
      <label>Tegelase nimi: </label>
      <br />
      <input ref={nimiRef} type="text" />
      <br />
      <label>Tegelase perenimi: </label>
      <br />
      <input ref={perenimiRef} type="text" />
      <br />
      <label>Tegelase elukoh: </label>
      <br />
      <input ref={elukohtRef} type="text" />
      <br />
      <label>Tegelase vanus: </label>
      <br />
      <input ref={vanusRef} type="number" />
      <br />

      <button onClick={lisa}>Lisa uus</button>
    </div>
  );
}

export default LisaTegelane;
