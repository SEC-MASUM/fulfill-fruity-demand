import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <h3>Selected Fruits</h3>
      <div className="cart-items"></div>

      <div className="card-button">
        <button className="choose-for-me">Choose 1 for me</button>
        <br />
        <button className="choose-again">Choose again</button>
      </div>
    </div>
  );
};

export default Cart;
