import './App.css';
import {Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht'
import LisaArvuti from './pages/LisaArvuti';
import VaataArvuteid from './pages/VaataArvuteid';
import Ostukorv from './pages/Ostukorv';
import Tooted from './pages/Tooted';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/all">
        <button className="nupp">Vaata sülearvuteid</button>
      </Link>

      <Link to="/add">
        <button className="nupp">Lisa</button>
      </Link>

      <Link to="/cart">
        <button className="nupp">Ostukorv</button>
      </Link>
      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>

     <Routes>
        <Route path="" element={<Avaleht/>} />;
        <Route path="add" element={<LisaArvuti/>} />;
        <Route path="all" element={<VaataArvuteid/>} />;
        <Route path="cart" element={<Ostukorv/>} />;
        <Route path="tooted" element={<Tooted/>} />;

      </Routes>
    </div>
  );
}

export default App;
