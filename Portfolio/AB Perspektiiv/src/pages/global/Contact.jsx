import React, { useEffect, useRef, useState } from "react";
import Map from "../../components/Map";
import Button from "react-bootstrap/Button";
import config from "../../data/config.json";
import Footer from "../../components/home/Footer";

export const Contact = () => {
  const [shops, uShops] = useState([]);

  const [coordinaates, setCoordinates] = useState({
    lngLat: [57.7731, 26.0367],
    zoom: 14,
  });

  useEffect(() => {
    fetch(config.shops)
      .then((res) => res.json())
      .then((json) => uShops(json || []));
  }, []);

  return (
    <div className="locations">
      <div className="contacts">
        <div className="contact">
          <img className="angeelikaContactImg" src="https://i.postimg.cc/V6yr4GV5/IMG-0026-Copy.jpg" alt="" />
          <h4>Angeelika Saaron</h4>
          <p>Arhitekt</p>
          <p>
            <a href="mailto:angeelika.saaron@abperspektiiv.com">
              angeelika.saaron@abperspektiiv.com{" "}
            </a>
          </p>
          <p>
            <a href="tel:+3725170440">+3725170440</a>
          </p>
          <p></p>
        </div>
        <div className="contact">
          <img src="https://i.postimg.cc/jS5R0qr7/IMG-9879.jpg" alt="" />
          <h4>Mario Brokans</h4>
          <p>Joonestaja/Turundus</p>
        </div>
      </div>
      {/* {shops.map((shop) => (
        <div className="map-btn">
          <Button
            key={shop.name}
            onClick={() =>
              setCoordinates({ lngLat: [shop.lati, shop.long], zoom: 17 })
            }
            className="gold-btn"
            variant="dark"
          >
            {shop.name}
          </Button>
        </div>
      ))} */}
      <Map mapCoordinaates={coordinaates} />
      <div>
        <br />
        {/* <Button
          onClick={() => setCoordinates({ lngLat: [58.8882, 25.523], zoom: 7 })}
          className="gold-btn"
          variant="dark"
        >
          Kõik Stuudiod
        </Button>{" "} */}
        {/* <Button
          onClick={() =>
            setCoordinates({ lngLat: [59.4378, 24.7574], zoom: 11 })
          }
          className="gold-btn"
          variant="dark"
        >
          Kõik Tallinna Stuudiod
        </Button> */}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
