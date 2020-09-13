import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Calories: {calories}</p>
      <img src={image} alt="" />
      <ul>
        {ingredients.map((data) => (
          <li>{data.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
