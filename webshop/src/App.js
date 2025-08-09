import { Link, Route, Routes } from "react-router-dom";
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
import { ContactUs } from "./pages/global/ContactUs";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./pages/global/NotFound";
import NavigationBar from "./components/NavigationBar";

function App() {
  

  return (
    <div className="App">
      <NavigationBar/>
      <Link to="admin"></Link>
      <Link to="admin/add-product"></Link>
      <Link to="admin/edit-product"></Link>
      <Link to="admin/maintain-categories"></Link>
      <Link to="admin/maintain-shops"></Link>
      <Link to="admin/maintain-products"></Link>
      <br />
      <br />
      {/* GLOBAL LINGID */}
      <Link to=""></Link>
      <Link to="cart"></Link>
      <Link to="contact"></Link>
      <Link to="shops"></Link>

      <Routes>
        {/* ADMIN */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route
          path="/admin/edit-product/:productId"
          element={<EditProduct />}
        />
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
        <Route path="/product/:productId" element={<SingleProduct />} />
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

