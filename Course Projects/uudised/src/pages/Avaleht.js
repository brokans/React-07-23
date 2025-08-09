import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Avaleht() {
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json()) // koos metadataga tagastus
      .then((data) => setParcelMachines(data)); // reaalselt mis seal API päringus tagastatakse
  }, []);

  return (
    <div>
      <div>See on avaleht, nähtav localhost:3000 aadressil</div>
      <img
        src="https://i.pinimg.com/564x/83/be/32/83be325e2d434d410339a95622877f70.jpg"
        alt="phone in hand"
      />
      {parcelMachines.map(element => (
        <div>
          <div>
            {" "}
            <i>{element.userId}</i>
          </div>
          <div>
            <u>{element.id}</u>
          </div>
          <div>
            {" "}
            <b>{element.title}</b>{" "}
          </div>
          <div>{element.body}</div>
          <Link to={"/kasutaja-postitused/" + element.userId}>
            <button>Kõik kasutaja postitused</button>
          </Link>
          <Link to={"/yks-postitus/" + element.id}>
            <button>Vaata postitust</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Avaleht;
