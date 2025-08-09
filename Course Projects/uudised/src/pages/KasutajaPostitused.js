import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function KasutajaPostitused() {
    const {kasutajaId} = useParams();
    const [parcelMachines, setParcelMachines] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json()) // koos metadataga tagastus
          .then(data => {
            const result = (data.filter(element => element.userId === Number(kasutajaId)))
            setParcelMachines(result);
        }) // reaalselt mis seal API päringus tagastatakse
      }, [kasutajaId]);     // kasutajaId on sulgudes et lahti saada missing dependency errorist


  return (
    <div>Kasutaja Postitused
        {parcelMachines.map(element => 
        <div>
          <div> <i>Kasutaja ID: {element.userId}</i></div>
          <div><u>Postituse ID: {element.id}</u></div>
          <div> <b>Postituse pealkiri: {element.title}</b> </div>
          <div>{element.body}</div>
          {/* <Link to={"/kasutaja-postitused/" + id}>
            <button>Kõik kasutaja postitused</button>
          </Link> */}
        </div>
        )}
    </div>
  )
}

export default KasutajaPostitused