import React, { useEffect, useState } from "react";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const { meals } = foods;
  console.log(meals);
  return (
    <div>
      <h1>{meals.length}</h1>
    </div>
  );
};

export default Foods;
