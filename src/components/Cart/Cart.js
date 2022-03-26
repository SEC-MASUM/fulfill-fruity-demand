import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h3>Selected Fruits</h3>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
        ))}
      </div>

      <div className="card-button">
        <button className="choose-for-me">Choose 1 for me</button>
        <br />
        <button className="choose-again">Choose again</button>
      </div>
    </div>
  );
};

export default Cart;
