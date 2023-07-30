import React, {useState} from 'react'


function Meist() {
  const[kontakt, n2itaKontakti] = useState("");
  const[kontakt1, n2itaKontakti1] = useState("");
  const[kontakt2, n2itaKontakti2] = useState("");
  const[kontakt3, n2itaKontakti3] = useState("");


  return (<div>
        <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
        <div>Meie töötajad:</div>
        <br />
        <div>Hash Tag</div>
        {/* <div>+3727689074</div> */}
        <div>Uudiste ankur</div>
        <button onClick={() => n2itaKontakti('+3727689074')}>Võta ühendust</button>
        <div>Tema kontakt: {kontakt}</div>
        <br />
        <div>Kaja Kajakas</div>
        {/* <div>+3726782390</div> */}
        <div>Meedia organisaator</div>
        <button onClick={() => n2itaKontakti1('+3726782390')}>Võta ühendust</button>
        <div>Tema kontakt: {kontakt1}</div>
        <br />
        <div>Ott Karu</div>
        {/* <div>+37287366023</div> */}
        <div>Helidisainer</div>
        <button onClick={() => n2itaKontakti2('+37287366023')}>Võta ühendust</button>
        <div>Tema kontakt: {kontakt2}</div>
        <br />
        <div>Jaana Lind</div>
        {/* <div>+3723998467</div> */}
        <div>Infotehnoloog</div>
        <button onClick={() => n2itaKontakti3('+3723998467')}>Võta ühendust</button>
        <div>Tema kontakt: {kontakt3}</div>
    </div>);
}

export default Meist