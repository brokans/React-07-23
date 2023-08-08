import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt'
import Leht from './pages/Leht';
import Loader from './pages/Loader';
import Seaded from './pages/Seaded';
import Books from './pages/Books';
import Numbrid from './pages/Numbrid';

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
        <Link to="/seaded">
          <button>Seaded</button>
        </Link>
        <Link to="/books">
          <button>Books</button>
        </Link>
        <Link to="/numbrid">
          <button>Numbrid</button>
        </Link>
        <Routes>
          <Route path='' element={<Avaleht />}/>
          <Route path='meist' element={<Meist />}/>
          <Route path='kontaktid' element={<Kontakt />}/>
          <Route path='leht' element={<Leht />}/>
          <Route path='loader' element={<Loader />}/>
          <Route path='seaded' element={<Seaded />}/>
          <Route path='books' element={<Books />}/>
          <Route path='numbrid' element={<Numbrid />}/>
      </Routes>
    </div>
  );
}

export default App;
