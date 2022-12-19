import React, { useState } from "react";

function FoodForm() {
  const [recipe, setRecipe] = useState({
    name: "",
    author: "",
    cooking_time: "",
    country: "",
    description: "",
    directions: [],
    image: "",
    preparation_time: "",
    nutrition: {
      calories: "",
      fat: "",
      protein: "",
      servings: "",
      carbohydrates: "",
    },
    ingredients: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { name, value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index][name] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleNutritionChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, nutrition: { ...recipe.nutrition, [name]: value } });
  };

  const handleDirectionsChange = (event) => {
    const { value } = event.target;
    setRecipe({ ...recipe, directions: value.split("\n") });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // add recipe to database
  };

  return (
    <div className="new-recipe">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={recipe.author}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={recipe.country}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={recipe.image}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Preparation Time (minutes):
          <input
            type="number"
            name="preparation_time"
            value={recipe.preparation_time}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Cooking Time (minutes):
          <input
            type="number"
            name="cooking_time"
            value={recipe.cooking_time}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Servings:
          <input
            type="number"
            name="servings"
            value={recipe.nutrition.servings}
            onChange={handleNutritionChange}
          />
        </label>
        <br />
        <div className="multi-input">
          <label>
            Ingredients:
            {recipe.ingredients.map((ingredient, index) => (
              <div className="labels" key={index}>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={ingredient.name}
                    onChange={(event) => handleIngredientChange(event, index)}
                  />
                </label>
                <br />
                <label>
                  Quantity:
                  <input
                    type="number"
                    name="quantity"
                    value={ingredient.quantity}
                    onChange={(event) => handleIngredientChange(event, index)}
                  />
                </label>
                <br />
                <label>
                  Unit:
                  <input
                    type="text"
                    name="unit"
                    value={ingredient.unit}
                    onChange={(event) => handleIngredientChange(event, index)}
                  />
                </label>
                <br />
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                setRecipe({
                  ...recipe,
                  ingredients: [
                    ...recipe.ingredients,
                    { name: "", quantity: "", unit: "" },
                  ],
                })
              }
            >
              Add Ingredient
            </button>
          </label>
        </div>
        <br />
        <label>
          Nutrition:
          <br />
          <label>
            Calories:
            <input
              type="number"
              name="calories"
              value={recipe.nutrition.calories}
              onChange={handleNutritionChange}
            />
          </label>
          <br />
          <label>
            Fat (g):
            <input
              type="number"
              name="fat"
              value={recipe.nutrition.fat}
              onChange={handleNutritionChange}
            />
          </label>
          <br />
          <label>
            Protein (g):
            <input
              type="number"
              name="protein"
              value={recipe.nutrition.protein}
              onChange={handleNutritionChange}
            />
          </label>
          <br />
          <label>
            Carbohydrates (g):
            <input
              type="number"
              name="carbohydrates"
              value={recipe.nutrition.carbohydrates}
              onChange={handleNutritionChange}
            />
          </label>
        </label>
        <br />
        <label>
          Directions:
          <textarea
            name="directions"
            value={recipe.directions.join("\n")}
            onChange={handleDirectionsChange}
          />
        </label>
        <br />
        <div className="submit-btn">
          <button type="submit">Add Recipe</button>
        </div>
      </form>
    </div>
  );
}

export default FoodForm;
