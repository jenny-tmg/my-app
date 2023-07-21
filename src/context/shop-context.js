import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [productId]: (prevCartItems[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[productId]) {
        updatedCartItems[productId] -= 1;
        if (updatedCartItems[productId] === 0) {
          delete updatedCartItems[productId];
        }
      }
      return updatedCartItems;
    });
  };

  const getTotalCartAmount = () => {
    let total = 0;
    Object.entries(cartItems).forEach(([productId, quantity]) => {
      
      const productPrice = 10;
      total += productPrice * quantity;
    });
    return total;
  };

  return (
    <ShopContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getTotalCartAmount }}
    >
      {children}
    </ShopContext.Provider>
  );
};

