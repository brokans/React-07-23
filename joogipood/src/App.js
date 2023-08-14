import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Lisa from './pages/Lisa';
import Halda from './pages/Halda';


function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/lisa">
        <button>Lisa</button>
      </Link>
      <Link to="/halda">
        <button>Halda</button>
      </Link>
      

      <Routes>
        <Route path="/" exact element = {< Avaleht />}/>
        <Route path="/lisa" exact element = {< Lisa />}/>
        <Route path="/halda" exact element = {< Halda />}/>
      </Routes>
    </div>
  );
}

export default App;
