import React, { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json"


// "https://bros-webshop-default-rtdb.europe-west1.firebasedatabase.app/shops.json"
function MaintainShops() {
  const [shops, uShops] = useState([]);

  const nameRef = useRef();
  const openTimeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const addressRef = useRef();
  const urlRef = useRef();

  useEffect(() => {
    fetch(config.shops)
      .then(res => res.json())
      .then(json => uShops(json || []))
  }, []);

  function addShop() {
    shops.push(
      {name: nameRef.current.value, 
      open: openTimeRef.current.value,
      lati: Number(latitudeRef.current.value),
      long: Number(longitudeRef.current.value),
      address: addressRef.current.value,
      url: urlRef.current.value});
      uShops(shops.slice());
      
      fetch(config.shops, {
        method: "PUT",
        body: JSON.stringify(shops)
      })
  }
  // .push()
  // {name: "", openTime: "",latitude: ""  longitude: ""};
  function deleteShop(index){
    shops.splice(index, 1);
    uShops(shops.slice());
    fetch(config.shops, {
      method: "PUT",
      body: JSON.stringify(shops)
    })
  }

  return (
    // .name
    //.openTime
    //.langitude
    //.longitude
    <div>
      <label htmlFor="">Poe nimi:</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label htmlFor="">Lahtioleku aeg:</label> <br />
      <input ref={openTimeRef} type="text" /><br />
      <label htmlFor="">Laiuskraad:</label> <br />
      <input ref={latitudeRef} type="text" /> <br />
      <label htmlFor="">Pikkuskraad:</label> <br />
      <input ref={longitudeRef} type="text" /> <br />
      <label htmlFor="">Aadress:</label> <br />
      <input ref={addressRef} type="text" /> <br />
      <label htmlFor="">URL:</label> <br />
      <input ref={urlRef} type="text" /> <br />
      <button onClick={addShop}>Lisa</button> <br /> <br />
      {shops.map((shop, index) => 
        <div>
          <div>{shop.name}</div>
          <div>Avatud: {shop.open}</div>
          <div>{shop.address}</div>           
           <button onClick={() => deleteShop(index)}>X</button> <br /> <br />
        </div>
      )}
    </div>
  )
}

export default MaintainShops