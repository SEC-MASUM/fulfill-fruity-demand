import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="app-header">
      <h1 className="header">
        <span className="fruity">Fruity</span>{" "}
        <span className="demand">Demand</span>
      </h1>
      <h3>Choose 4 Fruits</h3>
    </div>
  );
};

export default Header;
