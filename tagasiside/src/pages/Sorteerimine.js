import React, { useState } from 'react'

function Sorteerimine() {
    const[sort, uSort] = useState(['shoes', 'shirts', 'socks', 'sweaters','pigs', 'goats', 'sheep', 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'March', 'Jan', 'Feb', 'Dec'])
    
    //   KUSTUTAB valitud nime
    const kustuta = (index) => {
        sort.splice(index, 1);
        uSort(sort.slice());
    };

    const tyhjenda = () => {
        sort.splice(0); // alates nullindast kustutab kõik ära
        uSort(sort.slice());
      };

    const sorteeriAZ = () => {
        sort.sort();
        uSort(sort.slice())
    }

    const rohkemKuiNeli = () => {
        const vastus = sort.filter(element => element.length > 4);
        uSort(vastus);
    }

    const lisaKolm = () => {
        sort.push(["Chickens"], ["Cats"], ["Dogs"]);
        uSort(sort.slice());
    }

  return (
    <div>
        <button onClick={tyhjenda}>Tühjenda</button>
        <button onClick={sorteeriAZ}>Sorteeri</button>
        <button onClick={rohkemKuiNeli}>Rohkem kui neli</button>
        <button onClick={lisaKolm}>Lisa kolm sõna</button>
        {sort.map((element, index) => (
            <div key={element}>
                {element}
                <button onClick={() => kustuta(index)}>X</button>
            </div>
        ))}
        
    </div>
  )
}

export default Sorteerimine