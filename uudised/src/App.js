import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Meist from './pages/Meist';
import Kontaktid from './pages/Kontaktid';

function App() {
  return (
    <div className="App">
        <Link to="/">
          <button>Avaleht</button>
        </Link>
        <Link to="/uudised">
          <button>Uudised</button>
        </Link>
        <Link to="/meist"> 
          <button>Meist</button>
        </Link>
        <Link to="/kontaktid">
          <button>Võta meiega ühendust</button>
        </Link>

        <Routes>
          <Route path='' element={<Avaleht />}/>
          <Route path='uudised' element={<Uudised />}/>
          <Route path='meist' element={<Meist />}/>
          <Route path='kontaktid' element={<Kontaktid />}/>
      </Routes>
    </div>
  );
} 

export default App;
