import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, removeFromCart } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Cart Items</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(cartItems).map(([itemId, quantity]) => {
          if (quantity > 0) {
            return <CartItem key={itemId} itemId={itemId} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-lg font-semibold mb-4">Subtotal: $ {totalAmount}</p>
          <button
            className="py-2 px-4 bg-gray-500 text-white rounded-md mr-2"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
          <button className="py-2 px-4 bg-indigo-600 text-white rounded-md">
            Checkout
          </button>
        </div>
      ) : (
        <h2 className="text-xl font-semibold mt-8">Your Cart is Empty</h2>
      )}
    </div>
  );
};


