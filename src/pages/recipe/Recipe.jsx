import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// styles
import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch("http://localhost:3001/recipes/" + id);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.name}</h2>
          <div className="top-content">
            <img className="image" src={recipe.image} alt={recipe.name} />
            <div className="text-content">
              <p>Preparation time: {recipe.preparation_time} minutes</p>
              <p>Cooking time: {recipe.cooking_time} minutes</p>
              <p className="author">Author: {recipe.author}</p>
              <p className="description">Description: {recipe.description}</p>
            </div>
          </div>
          <div className="info">
            <div className="ingredients-info">
              <h3 className="page-title"> Ingredients | Quantity | Unit</h3>
              <ul className="ingredients">
                {recipe.ingredients.map(({ name, quantity, unit }) => (
                  <li key={name}>{`${name[0].toUpperCase()}${name.slice(
                    1
                  )} | ${quantity} | ${unit}`}</li>
                ))}
              </ul>
            </div>
            <div className="directions-info">
              <h3 className="page-title"> Cooking Directions</h3>
              <ul className="directions">
                {recipe.directions.map((step, id) => (
                  <li key={id}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Recipe;
