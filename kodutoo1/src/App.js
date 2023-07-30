import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt'


function App() {
  return (
    <div>
      <Link to="/">
          <button>Avaleht</button>
        </Link>
        <Link to="/meist"> 
          <button>Meist</button>
        </Link>
        <Link to="/kontaktid">
          <button>Kontakt</button>
        </Link>

        <Routes>
          <Route path='' element={<Avaleht />}/>
          <Route path='meist' element={<Meist />}/>
          <Route path='kontaktid' element={<Kontakt />}/>
      </Routes>
    </div>
  );
}

export default App;
