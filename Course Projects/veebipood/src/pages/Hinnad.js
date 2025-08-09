import React, { useState } from 'react'

function Hinnad() {
    const[hinnad, uHinnad] = useState([12,34,56,76,456,745,23,26, 101]);

    const sorteeri = () => {
        hinnad.sort((a,b) => a-b);      // ei saa otse kuvada on vaja sliceda, et teha arrayst uus koopia
        uHinnad(hinnad.slice());
    }
    
    const filtreeri = () => {
        const vastus = hinnad.filter(hind => hind > 100); // returnib uude muutujasse
        uHinnad(vastus);
    }

    const arvutaKokku = () => {
        let summa = 0;
        // iga arvu kohta hinnad arrays teeb sellise tehte
        hinnad.forEach(hind => summa = summa + hind);
        return summa;
    }
// {} kasutatakse html'i kirjutamiseks
  return (
    <div class="hinnad">
        <button onClick={sorteeri}>Sorteeri</button>
        <button onClick={filtreeri}>Filtreeri</button>
        {/* Kuvab hinnad üksteise all */}
        {hinnad.map(hind => <div key={hind}>Summa kokku: {hind}€</div> )}
        <div>Kokku: {arvutaKokku()}€</div>
    </div>
  )
}

export default Hinnad