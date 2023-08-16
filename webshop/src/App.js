import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
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


function App() {
  return (
    <div className="App">
      <div>Admin</div>
      <Link to="admin">
        <button>Admin</button>
      </Link>
      <Link to="admin/add-product">
        <button>Add Product</button>
      </Link>
      <Link to="admin/edit-product">
        <button>Edit Product</button>
      </Link>
      <Link to="admin/maintain-categories">
        <button>Maintain Categories</button>
      </Link>
      <Link to="admin/maintain-shops">
        <button>Maintain Shops</button>
      </Link>
      <Link to="admin/maintain-products">
        <button>Maintain Products</button>
      </Link>
      <br />
      <br />
      <div>Global</div>

      <Link to="">
        <button>Maintain Products</button>
      </Link>
      <Link to="cart">
        <button>Maintain Products</button>
      </Link>
      <Link to="contact">
        <button>Maintain Products</button>
      </Link>
      <Link to="product">
        <button>Maintain Products</button>
      </Link>
      <Link to="shops">
        <button>Maintain Products</button>
      </Link>


      <Routes>
        {/* ADMIN */}
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/add-product" element={<AddProduct />} />
        <Route path="admin/edit-product" element={<EditProduct />} />
        <Route
          path="admin/maintain-categories"
          element={<MaintainCategories />}
        />
        <Route path="admin/maintain-shops" element={<MaintainShops />} />
        <Route path="admin/maintain-products" element={<MaintainProducts />} />
        {/* GLOBAL */}
        <Route path="" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="product" element={<SingleProduct />} />
        <Route path="shops" element={<Shops />} />
        {/* SIGN UP */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
