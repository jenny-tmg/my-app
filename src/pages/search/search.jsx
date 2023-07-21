import React, { useState } from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(`https://fakestoreapi.com/products?q=${searchTerm}`)
      .then((res) => res.json())
      .then((json) => setSearchResults(json));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        <FaSearch size={20} />
      </button>
      {searchResults.length === 0 && searchTerm !== "" ? (
        <p>No products found matching your search term.</p>
      ) : (
        searchResults.slice(0, 5).map((product) => (
          <div className="product" key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Search;





