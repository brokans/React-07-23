import './App.css';
import {Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht'
import LisaArvuti from './pages/LisaArvuti';
import VaataArvuteid from './pages/VaataArvuteid';

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

     <Routes>
        <Route path="" element={<Avaleht/>} />;
        <Route path="add" element={<LisaArvuti/>} />;
        <Route path="all" element={<VaataArvuteid/>} />;
      </Routes>
    </div>
  );
}

export default App;
