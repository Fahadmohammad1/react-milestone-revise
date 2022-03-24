import React, { useEffect, useState } from "react";
import Food from "./Food/Food";
import "./Foods.css";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, [foods]);

  return (
    <div>
      <div className="card-container">
        {foods.map((food) => (
          <Food food={food} key={food.idMeal}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
