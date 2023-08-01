import React, {useRef, useState} from 'react'

function Leht() {
    const inputistLugeja = useRef();
    const [muutuvHTMLs, funktsioonMuutujaMuutmiseks] = useState("");

    const onClickFunctioon = () => {
        funktsioonMuutujaMuutmiseks(inputistLugeja.current.value);
    }
  return (
    <div className='center'>
        <input ref={inputistLugeja} type="text" />
        <button onClick={onClickFunctioon}>Muuda</button>
        <div>{muutuvHTMLs}</div>
    </div>
  )
}

export default Leht