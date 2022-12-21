import React from "react";
import { useLocation } from "react-router-dom";

// hooks
import { useFetch } from "../../hooks/useFetch";
import useFlags from "../../hooks/useFlags";

// components
import RecipeCard from "../../components/recipe_card/RecipeCard";

// styles
import "./Search.css";

const Search = () => {
  const flags = useFlags();
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3001/recipes?q=" + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeCard recipes={data} flags={flags} />}
    </div>
  );
};

export default Search;
