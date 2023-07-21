import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { CartProvider } from "./context/cart-context";
import { ShopProvider } from "./context/shop-context";
import Search from "./pages/search/search"; 

function App() {
  return (
    <div className="App">
      <ShopProvider>
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/search" element={<Search />} /> 
            </Routes>
          </Router>
        </CartProvider>
      </ShopProvider>
    </div>
  );
}

export default App;





