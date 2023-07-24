import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';



function App() {
  return (
    // className on reactile omane, kogu kood peab olema div'i vahel
    
    <div className="App">
      <Link to="avaleht">
        <img className="pilt" src="https://th.bing.com/th/id/R.5ecd5ae33c75e812c2e0b3b95d430d41?rik=GurWTZ4t7U5C5A&pid=ImgRaw&r=0" alt="" />
      </Link>

      <Link to="lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>
      
      <Routes>
        <Route path="avaleht" element={<Avaleht/>} />;
        <Route path="ostukorv" element={<Ostukorv/>} />;
        <Route path="lisa-toode" element={<LisaToode/>} />;
      </Routes>

    </div>
  );
}

export default App;
