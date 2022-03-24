import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { product } = props;
  return (
    <div className="cart-container">
      <h2>Added Food</h2>
      {product.map((p) => (
        <li>{p.strMeal}</li>
      ))}
    </div>
  );
};

export default Cart;
