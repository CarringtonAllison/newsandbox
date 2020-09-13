import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  //api information
  const APP_ID = "48d4523a";
  const Key = "a4b8956b83f22cf21d13393a3b0d6261";

  // setting variables and state
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  // async api call
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${Key}`
    );

    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  //function for updating the search input box live
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  //grabs the final search input
  const getSearch = (e) => {
    //stops page refresh
    e.preventDefault();

    //set the query to the search
    setQuery(search);

    //clear out the search box after
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search for Food"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.image}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            cooktime={recipe.recipe.totaltime}
            foodyield={recipe.recipe.yield}
            foodUrl={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
