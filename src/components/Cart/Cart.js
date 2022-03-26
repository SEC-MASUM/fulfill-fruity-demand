import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = ({
  cartItems,
  handleChooseForMe,
  handleChooseAgain,
  deleteItem,
}) => {
  return (
    <div className="cart">
      <h3>Selected Fruits</h3>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            deleteItem={deleteItem}
          ></CartItem>
        ))}
      </div>

      <div className="card-button">
        <button className="choose-for-me" onClick={() => handleChooseForMe()}>
          Choose 1 for me
        </button>
        <br />
        <button className="choose-again" onClick={() => handleChooseAgain()}>
          Choose again
        </button>
      </div>
    </div>
  );
};

export default Cart;
