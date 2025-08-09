import React, { useState } from "react";

function Avaleht() {
  // const tegelased = [
  //   { eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland", vanus: "7" },
  //   { eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland", vanus: "6" },
  //   { eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundred Acre Wood", vanus: "5" },
  //   { eesnimi: "Roo", perenimi: "Kangaroo", elukoht: "Hundred Acre Wood", vanus: "7" },
  //   { eesnimi: "Scooby", perenimi: "Doo", elukoht: "Crystal Cove", vanus: "3" },
  // ];
  const tegelasedLS = JSON.parse(localStorage.getItem("tegelased") || [])

  const [klikitudNimi, uKlikitudNimi] = useState();

  const kuvaNimi = (tegelane) => {
    // console.log(tegelane.eesnimi);
    uKlikitudNimi(tegelane.eesnimi);
  }

  function vali(klikitudTegelane){
    let valitud = JSON.parse(localStorage.getItem("valitudTegelased")) || [];
    valitud.push(klikitudTegelane);
    localStorage.setItem("valitudTegelased", JSON.stringify(valitud));
}


  return (
    <div>
      <div>
        {klikitudNimi !== "" && <div>Klikkisid tegelase {klikitudNimi} peal </div>}
        {tegelasedLS.map((tegelane, index) => (
          <div>
            <div>{tegelane.eesnimi}</div>
            <div>{tegelane.perenimi}</div>
            <div>{tegelane.elukoht}</div>
            <div>{tegelane.vanus}</div>
            <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button> 
            <button onClick={() => vali(tegelane)}>Vali</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Avaleht;
