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
      <div className="row">
        <div className="input-field col s4">
          <form onSubmit={getSearch} className="search-form">
            <div className="input-field">
              <input
                id="searchBar"
                className="materialize-textarea"
                type="text"
                value={search}
                onChange={updateSearch}
              />
              <label htmlFor="materialize-textarea">Search for Food</label>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                {/* <i class="material-icons right">send</i> */}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="card col s3">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
