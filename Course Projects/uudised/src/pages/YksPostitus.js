import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function YksPostitus() {
    const {postituseId} = useParams();
    const [postitus, uPostitus] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json()) // koos metadataga tagastus
          .then(data => {
            const result = (data.filter(element => element.id === Number(postituseId)))
            uPostitus(result);
        }) // reaalselt mis seal API päringus tagastatakse
      }, [postituseId]);

  return (
    <div>
        {postitus.map(element => 
        <div>
          <div> <i>Kasutaja ID: {element.userId}</i></div>
          <div><u>Postituse ID: {element.id}</u></div>
          <div> <b>Pealkiri: {element.title}</b> </div>
          <div>{element.body}</div>
          {/* <Link to={"/kasutaja-postitused/" + id}>
            <button>Kõik kasutaja postitused</button>
          </Link> */}
        </div>
        )}
    </div>
  )
}

export default YksPostitus