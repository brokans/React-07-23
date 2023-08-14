import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tagasisided from './pages/Tagasisided';
import TagasisideAndja from './pages/TagasisideAndja';
import Sorteerimine from './pages/Sorteerimine';




function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasiside leht</button>
      </Link>
      <Link to="/andjad">
        <button>Vaata kes tagasisidet on andnud</button>
      </Link>
      <Link to="/sorteerimine">
        <button>Sorteeri</button>
      </Link>

      <Routes>
        <Route path="/" exact element = {<div>Tere</div>}/>
        <Route path="/tagasiside" exact element = {< Tagasisided />}/>
        <Route path="/andjad" exact element = {< TagasisideAndja />}/>
        <Route path="/sorteerimine" exact element = {< Sorteerimine />}/>
      </Routes>
    </div>
  );
}

export default App;
