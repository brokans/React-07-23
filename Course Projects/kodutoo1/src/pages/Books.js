import React, {useState} from 'react'

function Books() {
    const [books, uBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "1984", "Brave New World"]);

    const reset = () => {
        uBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "1984", "Brave New World"]);  

    }
    //  SORTEERI
    const sortAZ = () => {
        books.sort((a,b) => a.localeCompare(b, "et"));
        uBooks(books.slice());
    }
    
    const sortZA = () => {
        books.sort((a,b) => b.localeCompare(a, "et"));
        uBooks(books.slice());
    }

    const sorteeriT2htedeArvKasv = () => {
        books.sort((a,b) => a.length - b.length);
        uBooks(books.slice());
    }

    const sortTeineTäht = () => {
        books.sort((a,b) => a[1].localeCompare(b[1]));
        uBooks(books.slice());
    }

    // Sorteerib sõnade arvu järgi
    const sortSonadeArv = () => {
        books.sort((a,b) => a.split(" ").length - b.split(" ").length);        
        uBooks(books.slice());
    }
    // Sorteerib eelviimase tähe järgi
    const sortEelViimaneT2ht = () => {
        books.sort((a,b) => a.charAt(a.length - 2).localeCompare(b.charAt(b.length - 2)));
        uBooks(books.slice());
    }
    // FILTRID
    const filtreeriTheRaamatud = () => {
        const vastus = books.filter(yksRaamat => yksRaamat.includes("The"));
        uBooks(vastus);
    }

    const filtreeriAndRaamatud = () => {
        const vastus = books.filter(yksRaamat => yksRaamat.includes("and"));
        uBooks(vastus);
    }

    const filtreeriV2hemalt10T2helised = () => {
        const vastus = books.filter(yksRaamat => yksRaamat.length >= 10);
        uBooks(vastus);
      }

    const filtreeriV2hemKui7 = () => {
        const vastus = books.filter(yksRaamat => yksRaamat.length < 7);
        uBooks(vastus);
    }

    const kolmVoiRohkem = () => {
        const vastus = books.filter(yksRaamat => yksRaamat.split(" ").length >= 3 );
        uBooks(vastus);
    }

    const eelViimaneT2htC = () => {
        const vastus = books.filter(yksRaamat => yksRaamat.charAt(yksRaamat.length - 2) === "c");
        uBooks(vastus);
    }
        


  return (
    <div>
        <button onClick={reset}>Reset</button>
        {/* Kuvab kõik raamatud */}
        {/* Resetib järjestuse algseks */}
        <div>Raamatuid: {books.length}</div>
        <div>Sorteeri: </div>
        <button onClick={sortAZ}>A-Z</button>
        <button onClick={sortZA}>Z-A</button>
        <button onClick={sorteeriT2htedeArvKasv}>Tähtede arv kasvavalt</button>
        <br />
        <button onClick={sortTeineTäht}>Teise tähe järgi</button>
        <button onClick={sortSonadeArv}>Sõnade arvu järgi</button>
        <button onClick={sortEelViimaneT2ht}>Eelviimase tähe järgi</button>
        <br />
        <div>Filtreeri:</div>
        <button onClick={filtreeriTheRaamatud}>"The" sõna</button>
        <button onClick={filtreeriAndRaamatud}>"and" sõna</button>
        <button onClick={filtreeriV2hemalt10T2helised}>Vähemalt 10 tähte</button>
        <br />
        <button onClick={filtreeriV2hemKui7}>Vähem kui 7 tähte</button>
        <button onClick={kolmVoiRohkem}>Kolm või rohkem sõna</button>
        <button onClick={eelViimaneT2htC}>Eelviimane C</button>

        <br />
        {books.map(yksRaamat => <div>{yksRaamat}</div> )}
        

    </div>
  )
}

export default Books