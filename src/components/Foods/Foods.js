import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "./Food/Food";
import "./Foods.css";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  return (
    <div className="main-section">
      <div className="card-container">
        {foods.map((food) => (
          <Food food={food} key={food.idMeal} addToCart={addToCart}></Food>
        ))}
      </div>
      <div className="cart">
        <Cart product={cart}></Cart>
      </div>
    </div>
  );
};

export default Foods;
