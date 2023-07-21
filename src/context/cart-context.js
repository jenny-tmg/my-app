import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
  
      const updatedCartItems = { ...prevCartItems };

      // Check if the product is already in the cart
      if (updatedCartItems[product.id]) {
        // If it exists, increase the quantity by 1
        updatedCartItems[product.id] += 1;
      } else {
        // If it doesn't exist, set the quantity to 1
        updatedCartItems[product.id] = 1;
      }

      return updatedCartItems;
    });
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
