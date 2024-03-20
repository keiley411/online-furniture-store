import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home_page from "./Components/HomePageComponents/Home_page";
import Login from "./Components/AuthenticationComponent/LoginComponent/Login";
import Signup from "./Components/AuthenticationComponent/SignUpComponent/Signup";
import NotFound from "./Components/NotFoundComponent/NotFound";
import Category from "./Components/CategoryComponent/Category_list";
import Admin from "./Components/Admin-page/Admin";
import { Contact } from "./Components/ContactComponent/Contact";
import Category_page from "./Components/CategoryComponent/Category_page";
import ProductList from "./Components/ProductComponent/ProductList";
import CategoryProducts from "./Components/Admin-page/CategoryProducts/CategoryProducts";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home_page />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/category/:category_name" element={<Category_page />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/categories/:category_id" element={<CategoryProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories/:category_id" element={<CategoryProducts/>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
