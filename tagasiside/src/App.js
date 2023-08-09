import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Tagasisided from './pages/Tagasisided';
import TagasisideAndja from './pages/TagasisideAndja';




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

      <Routes>
        <Route path="/" exact element = {<div>Tere</div>}/>
        <Route path="/tagasiside" exact element = {< Tagasisided />}/>
        <Route path="/andjad" exact element = {< TagasisideAndja />}/>
      </Routes>
    </div>
  );
}

export default App;
