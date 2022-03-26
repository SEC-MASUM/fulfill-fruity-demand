import React from "react";
import "./CartItem.css";
import { IoMdTrash } from "react-icons/io";

const CartItem = ({ cartItem }) => {
  console.log(cartItem);
  const { name, img, price } = cartItem;
  return (
    <div className="cart-container">
      <div className="cart-container">
        <div className="cart-image-container">
          <img src={img} alt="" />
        </div>
        <div className="cart-item-info">
          <h4>{name}</h4>
          <p>Price: $ {price}</p>
        </div>
      </div>

      <div className="delete-icon">
        <IoMdTrash></IoMdTrash>
      </div>
    </div>
  );
};

export default CartItem;
