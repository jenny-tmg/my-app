import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = ({ data }) => {
  const { id, title, price, image, description } = data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  const fallbackImage = "https://fakestoreapi.com/products";

  return (
    <div className="product-card">
      <img src={image || fallbackImage} alt={title} />
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="price">${price}</div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
