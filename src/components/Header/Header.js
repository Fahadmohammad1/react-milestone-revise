import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div>
        <h1>Khana - Pina</h1>
      </div>
      <div>
        <a href="#link">Home</a>
        <a href="#link">About</a>
        <a href="#link">Contact</a>
      </div>
    </nav>
  );
};

export default Header;
