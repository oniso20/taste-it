import React from "react";

import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <nav>
        <Link to="/" className="logo">
          <h1>TasteIT</h1>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/search">Search</Link>
          <Link to="/add-recipe">Add Recipe</Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
