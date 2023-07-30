import React, {useState} from 'react';


function Kontaktid() {
const[n2itaTelKristiine, mN2itaTelKristiine] = useState(false);
const[n2itaTelViru, mN2itaTelViru] = useState(false);
const[n2itaTelLouna, mN2itaTelLouna] = useState(false);


  return ( <div>
    <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
    <div>Võta meiega ühendust:</div>
    <br />
    <div onClick={() => mN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine Keskus</div>
    {n2itaTelKristiine && <div>+372732776</div>}
    <div>Endla 45, Tallinn</div>
    <br />
    <div onClick={() => mN2itaTelViru(!n2itaTelViru)}>Viru Keskus</div>
    {n2itaTelViru && <div>+372137724</div>}
    <div>Viru Väljak 4, Tallinn</div>
    <br />
    <div onClick={() => mN2itaTelLouna(!n2itaTelLouna)}>Lõuna Keskus</div>
    {n2itaTelLouna && <div>+372878678</div>}
    <div>Jaama 207, Tartu</div>
  </div>);
}

export default Kontaktid