import React from "react";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  foodyield,
  foodUrl,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>Calories: {calories}</p>
      <p>Yield: {foodyield} </p>
      <ul>
        <h4>Ingredients</h4>
        {ingredients.map((data) => (
          <li>{data.text}</li>
        ))}
      </ul>
      <a href={foodUrl} target="_blank">
        Prepare
      </a>
    </div>
  );
};

export default Recipe;
