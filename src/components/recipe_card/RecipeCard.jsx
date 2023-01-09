import { Link } from "react-router-dom";

// styles
import "./RecipeCard.css";

const RecipeCard = ({ recipes, flags = [] }) => {
  if (recipes.length === 0) {
    return <div className="error">No recipes found...</div>;
  }

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
            alt={recipe.country}
          />

          <p>{recipe.preparation_time} minutes to make.</p>
          <img className="image" src={recipe.image} alt={recipe.name} />
          <div>{recipe.description.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
