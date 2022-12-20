import React from "react";
import { useFetch } from "../../hooks/useFetch";

// components
import RecipeCard from "../../components/recipe_card/RecipeCard";

// styles
import "./Recipes.css";

const Recipes = () => {
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch("http://localhost:3001/recipes");

  const { data: flag } = useFetch(`https://restcountries.com/v3.1/all`);

  return (
    <div className="recipes">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && <RecipeCard recipes={recipe} flag={flag} />}
    </div>
  );
};

export default Recipes;
