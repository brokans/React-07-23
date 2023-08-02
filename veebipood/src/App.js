import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import MitteLeitud from './pages/MitteLeitud';
import Hinnad from './pages/Hinnad';
import Poed from './pages/Poed';
import Tooted from './pages/Tooted';
import { useState } from 'react';

// FIREBASE GOOGLE SIDUMINE TERMINALIS
// npm install firebase, et googlega siduda
// npm install -g firebase-tools
// firebase login
// firebase init
// hosting variant sealt
// public kustutada, build asemele -> single-page=yes -> automatic-build=no
// npm run build
// firebase deploy
// npm start

// LEHE UUENDAMINE
// Samal ajal kui server töötab lokaalselt, uues terminalis npm run build, uuendab lehte
// firebase deploy laeb failid uuesti üles
// Kui muudatusi broweseris näha pole siis Hard Reload, CTRL+SHIFT+R




function App() {
  
  // salvestab viimati valitud teema lokaalselt, säilib ka peale refreshi
  const [teema, uTeema] = useState(localStorage.getItem("teema"));
  
  //salvestab heleda teema lokaalselt
  const uuendaTeemaHeledaks = () => {
      uTeema("hele");
      localStorage.setItem("teema", "hele");
  }
  //salvestab tumeda teema lokaalselt
  const uuendaTeemaTumedaks = () => {
    uTeema("tume");
    localStorage.setItem("teema", "tume");
  }

  return (
    // className on reactile omane, kogu kood peab olema div'i vahel
    // hele või tume leht kogu website'le
    <div className={teema === "tume" ? "tume-leht" : "hele-leht"}>
      <Link to="">
        <img className="pilt" src="https://th.bing.com/th/id/R.5ecd5ae33c75e812c2e0b3b95d430d41?rik=GurWTZ4t7U5C5A&pid=ImgRaw&r=0" alt="" />
      </Link>
      <br />
      {/* Hele tume teema nupud */}
      {
        teema === "tume" ?
        <button onClick={uuendaTeemaHeledaks}>Light Mode</button> :
        <button onClick={uuendaTeemaTumedaks}>Dark Mode</button>
      }
      <br />
      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="seaded">
        <button className="nupp">Seaded</button>
      </Link>
      
      <Link to="hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Link to="poed">
        <button className="nupp">Poed</button>
      </Link>

      <Link to="Tooted">
        <button className="nupp">Tooted</button>
      </Link>


      <Routes>
        <Route path="" element={<Avaleht/>} />;
        <Route path="ostukorv" element={<Ostukorv/>} />;
        <Route path="/lisa-toode" element={<LisaToode/>} />;
        <Route path="/seaded" element={<Seaded/>} />;
        <Route path="*" element={<MitteLeitud/>} />;
        <Route path="/hinnad" element={<Hinnad/>} />;
        <Route path="/poed" element={<Poed/>} />;
        <Route path="/tooted" element={<Tooted/>} />;
      </Routes>

    </div>
  );
}

export default App;
