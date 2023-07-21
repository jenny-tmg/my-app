import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";

export const Product = ({ data }) => {
  const { addToCart, cartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(data);
  };

  // Check if the data object is valid and contains the necessary properties
  if (!data || typeof data !== "object") {
    return <div>Error: Invalid product data</div>;
  }

  const { id, title, price, description, image, rating } = data;

  if (!id || !title || !price || !description || !image || !rating) {
    return <div>Error: Invalid product data properties</div>;
  }

  // Get the quantity of the item in the cart
  const quantityInCart = cartItems[data.id] || 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {/* Display the image */}
      <img src={image} alt={title} className="w-full h-40 object-cover mb-2" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button
        className="mt-4 bg-black text-white py-2 px-4 rounded-md"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <p>Quantity in Cart: {quantityInCart}</p>
    </div>
  );
};






