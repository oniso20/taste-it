import { Link } from "react-router-dom";

// styles
import "./RecipeCard.css";

export default function RecipeList({ recipes, flag: flags }) {
  return (
    <div className="recipe-card">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.name}</h3>
          <img
            className="flag"
            src={
              flags
                ?.find((flag) => flag.name.common === recipe.country)
                ?.flags.png.replace(/,/g, "") || ""
            }
          />

          <p>{recipe.preparation_time} minutes to make.</p>
          <img className="image" src={recipe.image} alt={recipe.name} />
          <div>{recipe.description.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}
