import React from "react";
import Navbar from "./components/Navbar";
import MainBanner from "./components/MainBanner";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import LoginForm from "./components/LoginForm";

import AllProducts from "./pages/AllProducts";
import ProductCategories from "./pages/ProductCategories";
import Product from "./pages/Product";
import Cart from "./components/Cart";
import AddAddress from "./pages/AddAddress";
import MyOrders from "./pages/MyOrders";
import SellerLogin from "./components/Seller/SellerLogin";
import SellerLayout from "./pages/Seller/SellerLayout";
import AddProduct from "./pages/Seller/AddProduct";
import ProductList from "./pages/Seller/ProductList";
import Orders from "./pages/Seller/Orders";
import Loading from "./components/Loading";

function App() {
  const { showUserLogin, isSeller } = useAppContext();

  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div className="">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <LoginForm /> : null}
      <Toaster />

      <div className={`${isSellerPath ? "" : ""} `}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategories />} />
          <Route path="/products/:category/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/loader" element={<Loading />} />
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={isSeller ? <AddProduct /> : null} />
            <Route path="product-list" element={<ProductList />} />
            <Route path='orders' element={<Orders />} />
          </Route>
        </Routes>
      </div>

      {!isSellerPath && <Footer />}
    </div>
  );
}

export default App;
