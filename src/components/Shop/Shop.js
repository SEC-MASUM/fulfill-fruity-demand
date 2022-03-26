import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div>
      <div>
        <h1>It will be best choice</h1>
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
          <Cart cartItems={cartItems}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
