import React from "react";
import { useNavigate } from "react-router-dom";

import "./SearchBar.css";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <div className="search-bar">
      <form onChange={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          onChange={(e) => e.target.value}
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
