import { Link } from "react-router-dom";

// styles
import "./RecipeCard.css";

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-card">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.name}</h3>
          <p>{recipe.preparation_time} minutes to make.</p>
          <div>{recipe.description.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}
