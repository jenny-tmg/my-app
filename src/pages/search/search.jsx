import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Your search logic here...
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-black text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
       className="ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={handleSearch}
      >
        <FaSearch size={20} />
      </button>
      {/* Add code here to display search results */}
      {searchResults.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;






