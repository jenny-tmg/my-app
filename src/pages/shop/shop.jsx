import React, { useState, useEffect } from "react";
import { Product } from "./product";
import "./shop.css";
import axios from "axios";

export const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setProducts(data);
    });
  }, []);

  
  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>Online Store</h2>
      </div>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

