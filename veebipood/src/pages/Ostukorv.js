import React from 'react'
import {Link} from 'react-router-dom'

// rfce lühend teeb põhja
function Ostukorv() {
  return (
    <div>
      <div>Ostukorv on tühi</div>
      <Link to="/lisa-toode">E-Poodi</Link>
    </div>
    
  )
}

export default Ostukorv

// kus teen "npm start" - sinna tulevad koodivead
// kompileerimise vead ehk:
// 1. import tegemata
// 2. muutuja seos vale
// 3. HTML pole üks komplekt


// run-time error ehk käimasolemise error
// r-click -> inspect-> console
// 1. className --> v täht
// 2. URL vale