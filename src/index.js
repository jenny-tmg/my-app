import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ShopProvider } from "./context/shop-context"; 
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Router>
    <ShopProvider> 
      <App />
    </ShopProvider>
  </Router>,
  document.getElementById("root")
);



