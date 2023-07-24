import './App.css';
import {Link, Route, Routes } from 'react-router-dom';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';

function App() {
  return (
    <div className="App">
      <img className='main-picture' src="https://static.vecteezy.com/system/resources/previews/000/518/756/original/abstract-technology-background-concept-digital-world-map-dot-metallic-blue-on-hi-tech-future-design-vector.jpg" alt="" />
      <div className='rectangle'></div>

      <div className='nav-pictures'>
        <Link className='main-link' to="work">
          <img src="https://th.bing.com/th/id/OIP.1BmthBHZ-aSylb8XRfRC6gHaGx?pid=ImgDet&rs=1" alt="" />
          <p>Tööde leht</p>
        </Link>
        <Link className='main-link' to="hobbies">
          <img src="https://th.bing.com/th/id/R.f030f657fdb2cc47f1e7d0d4c20f3dab?rik=%2bTnkyQTsU99YhA&pid=ImgRaw&r=0" alt="" />
          <p>Hobide leht</p>
        </Link>
        <Link className='main-link' to="courses">
          <img src="https://cdn.windowsreport.com/wp-content/uploads/2020/03/Adobe-Photoshop-logo.jpg" alt="" />
          <p>Kursuste leht</p>
        </Link>
      </div>

      <Routes>
        <Route path="work" element={<Work />} />
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="courses" element={<Courses />} />
      </Routes>

    </div>
  );
}

export default App;
