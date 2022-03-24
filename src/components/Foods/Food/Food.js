import React from "react";
import "./Food.css";

const Food = ({ food }) => {
  return (
    <div>
      <div className="card">
        <img src={food.strMealThumb} alt="" />
        <div className="card-body">
          <h2>{food.strMeal}</h2>
          <h5>Category: {food.strCategory}</h5>
          <p>{food.strInstructions.slice(0, 100)}</p>
          <button className="primary-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Food;
