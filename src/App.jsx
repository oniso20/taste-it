import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import NewRecipe from "./pages/NewRecipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/add-recipe" element={<NewRecipe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
