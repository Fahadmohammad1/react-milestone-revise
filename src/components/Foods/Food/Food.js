import React from "react";
import "./Food.css";

const Food = ({ food }) => {
  return (
    <div>
      <div className="card">
        <img src={food.strMealThumb} alt="" />
        <div className="card-body">
          <h2>{food.strMeal}</h2>
        </div>
      </div>
    </div>
  );
};

export default Food;
