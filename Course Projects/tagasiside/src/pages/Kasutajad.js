import React, { useState } from 'react';
import kasutajadFailist from '../data/kasutajad.json';

function Kasutajad() {
    const [kasutajad, uKasutajad] = useState(kasutajadFailist);

    const rohkemKuiKümme = () => {
      const vastus = kasutajad.filter((element) => element.username.length >= 10);
      uKasutajad(vastus);
    };

    const findIndexAndDelete = (kasutaja) => {
      const index = kasutajad.indexOf(kasutaja);
      kasutajad.splice(index,1);
      uKasutajad(kasutajad.slice());
    }

    const n2itaK6iki = () => {
      uKasutajad(kasutajadFailist);
    }

    const findIndexLucio = () => {
      const index = kasutajad.findIndex(user => user.email === "Lucio_Hettinger@annie.ca");
      console.log(index);
    }

    const findFirstNameC = () => {
      const found = kasutajad.find(user => user.name.substring(0,1) === "C");
      console.log(found);
    }

    const sortByLatitude = () => {
      kasutajad.sort((a,b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
      uKasutajad(kasutajad.slice());
    }

    const filterByLongitude = () => {
      const result = kasutajad.filter(user => user.address.geo.lng > 0);
      uKasutajad(result);
    }

    const sumIds = () => {
      let sum = 0;
      kasutajad.forEach(user => sum = sum + user.id);
      console.log(sum);
    }

    const addToPhoneNumber = () => {
      const result = kasutajad.map(user => ({...user, phone: "000-"+user.phone}));
      uKasutajad(result);
    }

    const replaceAllWithEmails = () => {
      const result = kasutajad.map(user => user.email);
      console.log(result);
    }

    const replaceCatchphraseLetter = () => {
      const result = kasutajad.map(user => (
        {...user, company: {...user.company, catchPhrase: user.company.catchPhrase.replaceAll("a", "e")}}
      ))
      uKasutajad(result);
    }

  return (
    <div>
        <div>Kasutajate arv: {kasutajad.length}</div>
          <br />
          {/* NUPUD */}
          <button onClick={() => n2itaK6iki()}>0</button>
          <button onClick={() => rohkemKuiKümme()}>1</button>
          <button onClick={() => findIndexLucio()}>3</button>
          <button onClick={() => findFirstNameC()}>4</button>
          <button onClick={() => sortByLatitude()}>5</button>
          <button onClick={() => filterByLongitude()}>6</button>
          <button onClick={() => sumIds()}>7</button>
          <button onClick={() => addToPhoneNumber()}>8</button>
          <button onClick={() => replaceAllWithEmails()}>9</button>
          <button onClick={() => replaceCatchphraseLetter()}>10</button>



          
        {kasutajad.map((element) => (
        <div>
          {/* KASUTAJA INFO */}
          <div>userID: {element.id}</div>
          <div>id: {element.name}</div>
          <div>Title: {element.username}</div>
          <div>{element.address.street}</div>
          <div>{element.address.suite}</div>
          <div>{element.address.city}</div>
          <div>{element.address.zipcode}</div>
          <div>{element.address.geo.lat}</div>
          <div>{element.address.geo.lng}</div>
          <div>{element.phone}</div>
          <div>{element.website}</div>
          <div>{element.company.name}</div>
          <div>{element.company.catchPhrase}</div>
          <div>{element.company.bs}</div>
          <button onClick={() => findIndexAndDelete(element)}>X</button>
          <br />
          <br />
        </div>
      ))}
      </div>
  )
}

export default Kasutajad