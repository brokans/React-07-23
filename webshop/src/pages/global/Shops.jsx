import { useState } from 'react';
import Map from '../../components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  /// useEffectiga võtta kõik need poed mis sai lisatud MaintainShops sees
  // 
  return (<div>
    <button onClick={() => setCoordinates({lngLat: [58.8882, 25.5230], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>
    {/* <button onClick={() => setCoordinates({lngLat: [shop.latitude, shop.longitude], zoom: 13})}>{shop.name}</button> */}
    <button onClick={() => setCoordinates({lngLat: [59.4219, 24.7938], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4272, 24.7230], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [58.3780, 26.7306], zoom: 13})}>Tasku</button>

    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;