import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
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
    // console.log("Choose 1 for me");
    // console.log(cartItems);
    if (cartItems.length !== 0) {
      const totalCartItem = cartItems.length;
      const randomItem = Math.floor(Math.random() * totalCartItem);
      // console.log(cartItems[randomItem]);
      setRandomItem(cartItems[randomItem]);
    } else {
      alert("Plese add to cart some fruits");
    }
  };
  const handleChooseAgain = () => {
    console.log("Choose Again Clicked");
    const newCartItems = [];
    setCartItems(newCartItems);
    const newRandomItem = {};
    setRandomItem(newRandomItem);
  };

  const deleteItem = (item) => {
    console.log("delete", item);
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(newCartItems);
  };
  return (
    <div>
      <div className="randomly-selected">
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
            handleChooseAgain={handleChooseAgain}
            deleteItem={deleteItem}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
