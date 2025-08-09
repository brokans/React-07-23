import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tagasisided from './pages/Tagasisided';
import TagasisideAndja from './pages/TagasisideAndja';
import Sorteerimine from './pages/Sorteerimine';
import YksikTagasisideAndja from './pages/YksikTagasisideAndja';
import Tegevused from './pages/Tegevused';
import Kasutajad from './pages/Kasutajad';




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
      <Link to="/tegevused">
        <button>Tegevused</button>
      </Link>
      <Link to="/kasutajad">
        <button>Kasutajad</button>
      </Link>

      <Routes>
        <Route path="/" exact element = {<div>Tere</div>}/>
        <Route path="/tagasiside" exact element = {< Tagasisided />}/>
        <Route path="/andjad" exact element = {< TagasisideAndja />}/>
        <Route path="/sorteerimine" exact element = {< Sorteerimine />}/>
        <Route path="/yks-andja/:index" exact element = {< YksikTagasisideAndja />}/>
        <Route path="/tegevused" exact element = {< Tegevused />}/>
        <Route path="/kasutajad" exact element = {< Kasutajad />}/>
      </Routes>
    </div>
  );
}

export default App;
