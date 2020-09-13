import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "48d4523a";
  const Key = "a4b8956b83f22cf21d13393a3b0d6261";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${Key}`
    );
    const data = response.json().then((data) => {
      console.log(data);
      setRecipes(data.hits);
    });
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div>
        <Recipe />
        {/* {recipes.map((recipe) => (
          <Recipe />
        ))} */}
      </div>
    </div>
  );
};

export default App;
