import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { FaSearch } from "react-icons/fa";
import "./navbar.css";
import Search from '../pages/search/search';

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    
    fetch(`https://fakestoreapi.com/products?title=${searchTerm}`)
      .then((res) => res.json())
      .then((json) => setSearchResults(json));
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
      <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          handleSearch={handleSearch} 
        />
    </div>
  );
};



