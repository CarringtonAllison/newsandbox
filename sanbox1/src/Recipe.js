import React from "react";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  foodyield,
  foodUrl,
}) => {
  let fixedCalories = calories.toFixed(2);

  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={image} alt="Food Item" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <a href={foodUrl} targt="_blank" rel="noopener noreferrer">
            Prepare
          </a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {title}
          <i className="material-icons right">close</i>
        </span>
        <p>Yield: {foodyield} </p>
        <p>Calories: {fixedCalories}</p>
        <ul>
          <h5>Ingredients</h5>
          {ingredients.map((data) => (
            <li>{data.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
