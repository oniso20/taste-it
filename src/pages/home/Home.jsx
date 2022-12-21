import React from "react";
import { Link } from "react-router-dom";
import video from "../../assets/video/food-vid2.mp4";

// styles
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <video src={video} loop controls />
      <h1 className="title">Welcome to the Food Recipe App!</h1>
      <p className="description">
        Here you can find and share delicious recipes from around the world.
      </p>
      <div className="features">
        <div className="feature">
          <h2>Looking for a Recipe?</h2>
          <p> Browse through our collection of recipes.</p>
          <Link to="/recipes" className="btn btn-primary">
            Browse Recipes
          </Link>
        </div>
        <div className="feature">
          <h2>Have a Recipe to Share?</h2>
          <p> Add your own recipe to our collection.</p>
          <Link to="/add-recipe" className="btn btn-secondary">
            Add a Recipe
          </Link>
        </div>
        <div className="feature">
          <h2>Want to Learn More?</h2>
          <p> Visit the University of Helsinki website.</p>
          <a
            href="https://www.bc.fi/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-tertiary"
          >
            Visit University Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
