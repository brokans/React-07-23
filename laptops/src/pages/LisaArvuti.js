import React, { useState } from 'react'

function LisaArvuti() {
    const[message, setMessage] = useState("Lisa arvuti");
    const [n2itaNuppu, uuendaN2itaNuppu] = useState(true);

    function addProduct() {
        setMessage("Arvuti lisatud");
        uuendaN2itaNuppu(false);
    }

  return (
    <div>
        <div>Sõnum: {message}</div>
        <label>Mark: </label>
        <input type="text" /> <br />
        <label>Mudel: </label>
        <input type="text" /> <br />
        <label>Hind: </label>
        <input type="number" /> <br />
        {n2itaNuppu===true && <button onClick={() => addProduct()}>Sisesta</button>}
        
    </div>
  )
}

export default LisaArvuti;