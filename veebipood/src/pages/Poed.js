import React, { useState } from 'react'
// JAVASCRIPT
function Poed() {
  const [poed, uPoed] = useState(["Ülemiste", "Viimsi", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine"]);
  
  const reset = () => {
    uPoed(["Ülemiste", "Viimsi", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine"]);  
  }
  
  
  const sorteeriAZ = () => {
    poed.sort((a, b) => a.localeCompare(b, "et"));
    uPoed(poed.slice());
  }

  const sorteeriZA = () => {
    // võrdlemiseks kasutatakse localCompare, ka tagurpidi, "et" näitab keelt mille järgi sorteeritakse
    poed.sort((a, b) => b.localeCompare(a, "et"));
    uPoed(poed.slice());
  }
 
  const sorteeriT2htedeArvKasv = () => {
    poed.sort((a, b) => a.length - b.length);
    uPoed(poed.slice());
  }

  const sorteeriT2htedeArvKah = () => {
    poed.sort((a, b) => b.length - a.length);
    uPoed(poed.slice());
  }

  const sorteeriKolmasT2htAZ = () => {
    poed.sort((a, b) => a[2].localeCompare(b[2]));
    uPoed(poed.slice());
  }

  const filtreeriEgaLoppevad = () => {
    // salvestab sõnad mis lõpevad e'ga
    const vastus = poed.filter(yksPood => yksPood.endsWith("e"));
    uPoed(vastus);
  }
  // sõna on pikem kui 9 tähte
  const filtreeri9T2haliesed = () => {
    const vastus = poed.filter(yksPood => yksPood.length === 9);
    uPoed(vastus);
  }
  // 7 või rohkem tähte
  const filtreeriV2hemalt7T2helised = () => {
    const vastus = poed.filter(yksPood => yksPood.length >= 7);
    uPoed(vastus);
  }
  // sisaldab is 
  const filtreeriKesSisaldabIsLyhendit = () => {
    const vastus = poed.filter(yksPood => yksPood.includes("is"));
    uPoed(vastus);
  }
  // Kolmas täht sõnas on i
  const filtreeriKelleKolmasTähtI = () => {
    const vastus = poed.filter(yksPood => yksPood[2] === "i");
    uPoed(vastus);
  }


    return (
        // HTML
    <div>
        <button onClick={reset}>Reset</button>
        <div>Poode: {poed.length} tk</div>
        <div>Sorteeri: </div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriT2htedeArvKasv}>Sorteeri tähtede arv kasvavalt</button>
        <button onClick={sorteeriT2htedeArvKah}>Sorteeri täthtede arv kahanevalt</button>
        <button onClick={sorteeriKolmasT2htAZ}>Sorteeri kolmas täht A-Z</button>
        <br />
        <div>Filtreeri:</div>
        <button onClick={filtreeriEgaLoppevad}>E'ga lõppevad</button>
        <button onClick={filtreeri9T2haliesed}>9 tähelised</button>
        <button onClick={filtreeriV2hemalt7T2helised}>Vähemalt 7 tähte</button>
        <button onClick={filtreeriKesSisaldabIsLyhendit}>is lühendiga</button>
        <button onClick={filtreeriKelleKolmasTähtI}>Kolmas täht i</button>
        {poed.map(yksPood => <div>{yksPood}</div> )}
    </div>
  )
}

export default Poed