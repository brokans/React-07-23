import { Link, Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";

import "./App.css";
import Avaleht from "./pages/Avaleht";
import Uudised from "./pages/Uudised";
import Meist from "./pages/Meist";
import Kontaktid from "./pages/Kontaktid";

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
  const { t, i18n } = useTranslation();

  function changeLangEE() {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee");
  }

  function changeLangEN() {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
        <Container>
          <Navbar.Brand as={Link} to="avaleht">
            Uudised
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="uudised">
                {t("uudised")}
              </Nav.Link>
              <Nav.Link as={Link} to="meist">
                {t("meist")}
              </Nav.Link>
              <Nav.Link as={Link} to="kontaktid">
                {t("kontaktid")}
              </Nav.Link>
            </Nav>
            <Nav>
              <button onClick={changeLangEN}>english</button>
              <button onClick={changeLangEE}>eesti keel</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Link to="avaleht">
      </Link>
      <Link to="/uudised">
      </Link>
      <Link to="/meist">
      </Link>
      <Link to="/kontaktid">
      </Link>
      <Routes>
        <Route path="avaleht" element={<Avaleht />} />
        <Route path="uudised" element={<Uudised />} />
        <Route path="meist" element={<Meist />} />
        <Route path="kontaktid" element={<Kontaktid />} />
      </Routes>
    </div>
  );
}

export default App;
