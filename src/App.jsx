import "./App.css";
import "./App.css";
import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Layout/Footer/Footer";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import ListProducts from "./Components/ListProducts/ListProducts";
import Profile from "./Components/Profile/Profile";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Checkout";

export const MyContext = createContext();
const localCart = JSON.parse(localStorage.getItem("cart")) || [];
const localCartId = JSON.parse(localStorage.getItem("cartId")) || [];
function App() {
  const [cart, setCart] = useState(localCart);
  const [cartId, setCartId] = useState(localCartId);

  return (
    <div>
      <MyContext.Provider value={{ cart, setCart, cartId, setCartId }}>
        <div className="App">
          <Routes>
            <Route path="/Checkout" element={[<Header />, <Footer />]} />
            <Route path="/" element={[<Header />, <Home />, <Footer />]} />

            <Route path="/Login" element={<Login />} />
            <Route
              path="/Orders"
              element={[<Header />, <Orders />, <Footer />]}
            />

            <Route
              path="/ListProducts"
              element={[<Header />, <ListProducts />, <Footer />]}
            />

            <Route path="/Profile" element={<Profile />} />

            <Route path="/Cart" element={[<Header />, <Cart />, <Footer />]} />
          </Routes>
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;
