import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart-item.css";

export const CartItem = ({ itemId }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product data based on the itemId
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log("Error fetching product:", error));
  }, [itemId]);

  if (!product) {
    return <div>Loading...</div>; // Display a loading message while fetching the product data
  }

  const quantity = cartItems[itemId] || 0; // Ensure quantity is defined to avoid errors

  const fallbackImage =
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";

  return (
    <div className="cartItem">
      <div className="itemInfo">
        <img
          src={product.image || fallbackImage}
          alt={product.title}
          className="cartItemImage"
        />
        <div className="description">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="itemActions">
        <p>Price: ${product.price}</p>
        <button
          className="removeBtn"
          onClick={() => removeFromCart(itemId)}
        >
          Remove
        </button>
        <div className="quantity">
          <button
            className="quantityBtn"
            onClick={() => removeFromCart(itemId)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button className="quantityBtn" onClick={() => addToCart(itemId)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};







