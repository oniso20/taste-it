import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import Recipe from "./pages/recipe/Recipe";
import NewRecipe from "./pages/new_recipe/NewRecipe";
import Search from "./pages/search/Search";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/search" element={<Search />} />
          <Route path="/add-recipe" element={<NewRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
