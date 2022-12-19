import React from "react";
import { useFetch } from "../../hooks/useFetch";

// components
import RecipeCard from "../../components/recipe_card/RecipeCard";

// styles
import "./Recipes.css";

const Recipes = () => {
  const { data, isPending, error } = useFetch("http://localhost:3001/recipes");

  return (
    <div className="recipes">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeCard recipes={data} />}
    </div>
  );
};

export default Recipes;
