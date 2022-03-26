import React from "react";

const Product = ({ product }) => {
  const { name } = product;
  return (
    <div>
      <h>Name: {name}</h>
    </div>
  );
};

export default Product;
