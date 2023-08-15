import React, {useState} from 'react';


function Meist() {
  const [kontakt, n2itaKontakti] = useState("");
  const [valitud, uValitud] = useState("");
  const tootajad = [
    {nimi: "Hash Tag", ala: "Uudiste ankur", tel: "3727689074"},
    {nimi: "Kaja Kajakas", ala: "Meedia organisaator", tel: "3726782390"},
    {nimi: "Ott Karu", ala: "Helidisainer", tel: "37287366023"},
    {nimi: "Jaana Lind", ala: "Infotehnoloog", tel: "3723998467"},
    {nimi: "Hash Tag", ala: "Uudiste ankur", tel: "3727689074"},
    {nimi: "Kaja Kajakas", ala: "Meedia organisaator", tel: "3726782390"},
    {nimi: "Ott Karu", ala: "Helidisainer", tel: "37287366023"},
  ]

  
// Ei toiminud millegi pärast
  // const votaYhendust = (tootaja) = {
  //   n2itaKontakti{tootaja.nimi};
  //   uValitud{tootaja.tel};
  // }

  return (<div>
        <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
        <div>Meie töötajaid:</div>
        {/* VALITUD INIMENE: {valitud} */}
        <br />
        <div>{tootajad.map(tootaja =>
          <div className={tootaja.nimi === valitud ?'valitud' : undefined}>
            <div>{tootaja.nimi}</div>
            <div>{tootaja.ala}</div>
            <button onClick={() => [n2itaKontakti(tootaja.tel), uValitud(tootaja.nimi)]}>Võta ühendust</button>

          </div>
          
          )}

        </div>
        {/* <div>Hash Tag</div>
        <div>Uudiste ankur</div>
        <button onClick={() => n2itaKontakti('+3727689074')}>Võta ühendust</button>
        <div>Tema kontakt: {kontakt}</div>
        <br />
        <div>Kaja Kajakas</div>
        <div>Meedia organisaator</div>
        <button onClick={() => n2itaKontakti1('+3726782390')}>Võta ühendust</button>
        <div>Tema kontakt: {kontakt1}</div>
        <br />
        <div>Ott Karu</div>
        <div>Helidisainer</div>
        <button onClick={() => n2itaKontakti2('+37287366023')}>Võta ühendust</button>
        <div>Tema kontakt: {kontakt2}</div>
        <br />
        <div>Jaana Lind</div>
        <div>Infotehnoloog</div>
        <button onClick={() => n2itaKontakti3('+3723998467')}>Võta ühendust</button>
        <div>Tema kontakt: {kontakt3}</div> */}
        {kontakt !== "" && <div>Tema kontakt: {kontakt} </div> }
    </div>
    )
}

export default Meist