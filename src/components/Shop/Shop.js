import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import CartItem from "../CartItem/CartItem";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [randomItem, setRandomItem] = useState({});

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);
    // console.log("clicked", product);
  };

  const handleChooseForMe = () => {
    const newRandomItem = {};
    setRandomItem(newRandomItem);
    // console.log("Choose 1 for me");
    // console.log(cartItems);
    const totalCartItem = cartItems.length;
    const randomItem = Math.floor(Math.random() * totalCartItem);
    // console.log(cartItems[randomItem]);
    setRandomItem(cartItems[randomItem]);
  };

  return (
    <div>
      <div className="randomly-selectd">
        <h1>{randomItem.name}</h1>
      </div>
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="selected-item-container">
          <Cart
            cartItems={cartItems}
            handleChooseForMe={handleChooseForMe}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
