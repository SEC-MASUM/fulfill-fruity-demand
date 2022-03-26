import React from "react";
import "./Product.css";
import { BsCartPlusFill } from "react-icons/bs";

const Product = ({ product, handleAddToCart }) => {
  const { name, img, price } = product;
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <h3>
          <span>{name}</span>
        </h3>
        <h4>
          <span className="price">$ {price}</span>
        </h4>
      </div>
      <div className="add-to-cart" onClick={() => handleAddToCart(product)}>
        <h4>ADD TO CART</h4>
        <BsCartPlusFill className="icon"></BsCartPlusFill>
      </div>
    </div>
  );
};

export default Product;

/* <button onClick={() => handleAddToCart(product)}></button> */
