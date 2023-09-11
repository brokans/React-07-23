import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
// import { t } from 'react-i18next';

function NavigationBar() {
    const { t, i18n } = useTranslation();

  function changeLangEE() {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee");
  }

  function changeLangEN() {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }
  function changeLangFI() {
    i18n.changeLanguage("fi");
    localStorage.setItem("language", "fi");
  }
  function changeLangLV() {
    i18n.changeLanguage("lv");
    localStorage.setItem("language", "lv");
  }
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Bro WebShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="admin">
                {t("nav.admin")}
              </Nav.Link>
              <Nav.Link as={Link} to="contact">
                {t("nav.contact")}
              </Nav.Link>
              <Nav.Link as={Link} to="shops">
                {t("nav.shops")}
              </Nav.Link>
            </Nav>
            <Nav>
              {/*  
              <button onClick={changeLangEE}>eesti keel</button> */}
              <Nav.Link>
                <button onClick={changeLangEE}>Est</button>
                <button onClick={changeLangEN}>Eng</button>
                <button onClick={changeLangFI}>Fin</button>
                <button onClick={changeLangLV}>Lat</button>
                <img src="../public/estonian.png" alt="" />
              </Nav.Link>
              <Nav.Link as={Link} to="login">
                {t("nav.login")}
              </Nav.Link>
              <Nav.Link as={Link} to="cart">
                {t("nav.cart")}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar