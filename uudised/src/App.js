import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Meist from './pages/Meist';
import Kontaktid from './pages/Kontaktid';

// FIREBASE GOOGLE SIDUMINE TERMINALIS
// npm install firebase, et googlega siduda
// npm install -g firebase-tools
// firebase login
// firebase init
// hosting variant sealt
// public kustutada, build asemele -> single-page=yes -> automatic-build=no
// npm run build
// firebase deploy
// npm start

// LEHE UUENDAMINE
// Samal ajal kui server töötab lokaalselt, uues terminalis npm run build, uuendab lehte
// firebase run build
// firebase deploy --only hosting:uudised-08-23 laeb failid uuesti üles selle projekti jaoks
// Kui muudatusi broweseris näha pole siis Hard Reload, CTRL+SHIFT+R


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
