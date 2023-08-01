import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt'
import Leht from './pages/Leht';
import Loader from './pages/Loader';

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
        <Link to="/leht">
          <button>Leht</button>
        </Link>
        <Link to="/loader">
          <button>Loader</button>
        </Link>

        <Routes>
          <Route path='' element={<Avaleht />}/>
          <Route path='meist' element={<Meist />}/>
          <Route path='kontaktid' element={<Kontakt />}/>
          <Route path='leht' element={<Leht />}/>
          <Route path='loader' element={<Loader />}/>
      </Routes>
    </div>
  );
}

export default App;
