import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
//import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, removeFromCart } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h2>Your cart Items</h2>
      </div>
      <div className="cartItems">
        {Object.entries(cartItems).map(([itemId, quantity]) => {
          if (quantity > 0) {
            return <CartItem key={itemId} itemId={itemId} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: $ {totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h2>Your Cart is Empty</h2>
      )}
    </div>
  );
};

