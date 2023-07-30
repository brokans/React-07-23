import React, { useState } from 'react'

function Kontakt() {
    const[aadress, m22raAadress] = useState("Tallinn");
    const[telefon, m22raTelefon] = useState("+37256737438");
    const[email, m22raEmail] = useState("meil@meil.com");
    const[avaldis, ingliseKeelne] = useState("ei");


    function inEnglish() {
        m22raAadress("Tallinn in english");
        m22raTelefon("PlusThree7256737438");
        m22raEmail("mail@mail.com");
        ingliseKeelne("jah")
    }


  return (
    <div>
        <div>{aadress}</div>
        {/* <div>Tallinn</div> */}
        <div>{telefon}</div>
        {/* <div>+37256737438</div> */}
        <div>{email}</div>
        {/* <div>meil@meil.com</div> */}
        <button onClick={inEnglish}>Muuda inglise keelseks</button>
        <div>{avaldis}</div>
    </div>);

}
export default Kontakt