import { Link, Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from 'react-i18next';
// import { changeLanguage } from "i18next";

import "./App.css";
import AdminHome from "./pages/admin/AdminHome";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainShops from "./pages/admin/MaintainShops";
import MaintainProducts from "./pages/admin/MaintainProducts";
import HomePage from "./pages/global/HomePage";
import Cart from "./pages/global/Cart";
import Shops from "./pages/global/Shops";
import SingleProduct from "./pages/global/SingleProduct";
import ContactUs from "./pages/global/ContactUs";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./pages/global/NotFound";


function App() {
  const { t, i18n } = useTranslation();
  
  function changeLangEE(){
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
          <Navbar.Brand as={Link} to="/">
            Bro WebShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="admin">
                {t("admin")}
              </Nav.Link>
              <Nav.Link as={Link} to="contact">
                {t("contact")}
              </Nav.Link>
              <Nav.Link as={Link} to="shops">
                {t("shops")}
              </Nav.Link>
            </Nav>
            <Nav>
              <button onClick={changeLangEN}>english</button>
              <button onClick={changeLangEE}>estonian</button>
              <Nav.Link as={Link} to="login">
                {t("login")}
              </Nav.Link>
              <Nav.Link as={Link} to="cart">
                {t("cart")}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <div>Admin</div> */}
      <Link to="admin">
      </Link>
      <Link to="admin/add-product">
      </Link>
      <Link to="admin/edit-product">
      </Link>
      <Link to="admin/maintain-categories">
      </Link>
      <Link to="admin/maintain-shops">
      </Link>
      <Link to="admin/maintain-products">
      </Link>
      <br />
      <br />
      {/* GLOBAL LINGID */}
      <Link to="">
      </Link>
      <Link to="cart">
      </Link>
      <Link to="contact">
      </Link>
      <Link to="shops">
      </Link>

      <Routes>
        {/* ADMIN */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/edit-product/:productId" element={<EditProduct />} />
        <Route
          path="/admin/maintain-categories"
          element={<MaintainCategories />}
        />
        <Route path="/admin/maintain-shops" element={<MaintainShops />} />
        <Route path="/admin/maintain-products" element={<MaintainProducts />} />
        {/* GLOBAL */}
        <Route path="" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/shops" element={<Shops />} />
        {/* SIGN UP */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// Muuta favicon + Nimi
// Muuta Font
// Panna firebase üles

// 17.08
// E, K
// 1. HomePages sorteerimine ja filtreerimine +
// 2. MaintainProductsis kustutamine (refreshiga tulevad tagasi) +
// 3. AddProduct lisamine +
// 4. SingleProduct ühe toote vaatamine + 
// 5a. HomePages võimaldada ostukorvi lisada + 
// 5b. Cart.js lehel võimaldada ostukorvi sisu vaadata + 
//      ostukorvist kustutada, ostukorvi tühjendada, ostukorvi kogusummat vaadata
//      dünaamiline väljakuvamine (tühjendamine ja kogusumma peita kui tühi)
//              kui tühi, siis öelda, et on tühi
// 6. Mõnele kodusele projektile (nt uudised) peale ka tõlge ja Bootstrap
//          praegu on lihtsasti meelde tuletatav
//          2-3 kuu pärast on vaja uuesti teha
//          1h-2h et see peale panna kui on juba korra oma peaga läbi tehtud
// 7. React-toastify peale: kustutades, uut toodet lisades, ostukorvi lisades