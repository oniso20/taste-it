import React from "react";

// hooks
import { useFetch } from "../../hooks/useFetch";
import useFlags from "../../hooks/useFlags";

// components
import RecipeCard from "../../components/recipe_card/RecipeCard";

// styles
import "./Recipes.css";

const Recipes = () => {
  const flags = useFlags();
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch("http://localhost:3001/recipes");

  return (
    <div className="recipes">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && <RecipeCard recipes={recipe} flags={flags} />}
    </div>
  );
};

export default Recipes;
