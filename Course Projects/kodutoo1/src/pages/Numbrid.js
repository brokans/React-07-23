import React, { useState } from 'react'

function Numbrid() {
    const [numbers, uNumbers] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135, 255, 123]);

    const reset = () => {
        uNumbers([4, 23, 7, 39, 19, 0, 9, 14, 135, 255, 123]);
    }

    // SORTEERING
    const arvKasv = () => {
        numbers.sort((a,b) => a - b );
        uNumbers(numbers.slice());
    
    } 

    const arvKahanev = () => {
        numbers.sort((a,b) => b - a );
        uNumbers(numbers.slice());
    
    } 

    const esimeneNr = () => {
        numbers.sort();
        uNumbers(numbers.slice());
    }
    
    const viimaneNr = () => {
        const vordle = (a, b) => (a > b ? -1 : 0);
        numbers.sort(vordle)
        uNumbers(numbers.slice());
    }
    // FILTRID
    const suuremKuiKaheksa = () => {
        const vastus = numbers.filter(yksNumber => yksNumber > 8);
        uNumbers(vastus);
    }

    const allaKymne = () => {
        const vastus = numbers.filter(yksNumber => yksNumber < 10);
        uNumbers(vastus);
    }

    const paarisArvud = () => {
        const vastus = numbers.filter(yksNumber => yksNumber % 2 === 0);
        uNumbers(vastus);
    }

    const algabYhega = () => {
        const vastus = numbers.filter(yksNumber => yksNumber.toString()[0] === "1");
        uNumbers(vastus);
    }

    const sisaldabKolme = () => {
        const vastus = numbers.filter(yksNumber => yksNumber.toString().includes("3"));
        uNumbers(vastus);
    }


  return (
    <div>
        <br />
        <button onClick={reset}>Reset</button>
        <br />
        <div>Sorteeri: </div>
        <button onClick={arvKasv}>Kasvavalt</button>
        <button onClick={arvKahanev}>Kahanevalt</button>
        <button onClick={esimeneNr}>Esimene number</button>
        <button onClick={viimaneNr}>Viimane number</button>
        <br />
        <div>Filtreeri: </div>
        <button onClick={suuremKuiKaheksa}>Suurem kui 8</button>
        <button onClick={allaKymne}>Väiksem kui 10</button>
        <br />
        <button onClick={paarisArvud}>Jaguvad kahega</button>
        <button onClick={algabYhega}>Algab ühega</button>
        <button onClick={sisaldabKolme}>Sisaldab kolme</button>


        {numbers.map(yksNumber => <div>{yksNumber}</div> )}
    </div>
  )
}

export default Numbrid