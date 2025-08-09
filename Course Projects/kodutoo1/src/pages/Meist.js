import React, {useState} from 'react'

function Meist() {
const[message, m22raMessage] = useState("Vali mõni tegevus:")

function kandideeri(){
    m22raMessage("Selleks saada meile e-mail jobs@html-css.com");
}

function tootajad() {
    m22raMessage("Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal.");
}

function uhendust() {
    m22raMessage("Ühenduse võtmiseks mine lehele Kontakt.");
}   
  return (
    <div>
        <div>{message}</div>
        <button onClick={kandideeri}>Kandideeri tööle</button><br />
        <button onClick={tootajad}>Meie töötajaid</button><br />
        <button onClick={uhendust}>Võta ühendust</button><br />
        

    </div>
  )
}

export default Meist