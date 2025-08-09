import React, {useState} from 'react';


function Kontaktid() {
const[n2itaTelKristiine, mN2itaTelKristiine] = useState(false);
const[n2itaTelViru, mN2itaTelViru] = useState(false);
const[n2itaTelLouna, mN2itaTelLouna] = useState(false);


  return ( <div>
    <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
    <div>Võta meiega ühendust:</div>
    <br />
    <div className={n2itaTelKristiine === true ? 'valitud':undefined} onClick={() => mN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine Keskus</div>
    {n2itaTelKristiine && <div className='valitud'>+372732776</div>}
    <div className={n2itaTelKristiine === true ? 'valitud':undefined}>Endla 45, Tallinn</div>
    <br />
    <div className={n2itaTelViru === true ? 'valitud':undefined} onClick={() => mN2itaTelViru(!n2itaTelViru)}>Viru Keskus</div>
    {n2itaTelViru && <div className='valitud'>+372137724</div>}
    <div className={n2itaTelViru === true ? 'valitud':undefined}>Viru Väljak 4, Tallinn</div>
    <br />
    <div className={n2itaTelLouna === true ? 'valitud':undefined} onClick={() => mN2itaTelLouna(!n2itaTelLouna)}>Lõuna Keskus</div>
    {n2itaTelLouna && <div className='valitud'>+372878678</div>}
    <div className={n2itaTelLouna === true ? 'valitud':undefined}>Jaama 207, Tartu</div>
  </div>);
}

export default Kontaktid