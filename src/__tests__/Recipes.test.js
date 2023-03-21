import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Recipes from "../pages/recipes/Recipes"
import { useFetch } from "../hooks/useFetch";
import useFlags from "../hooks/useFlags";
import "@testing-library/jest-dom";


// Mock the hooks
jest.mock("../hooks/useFetch");
jest.mock("../hooks/useFlags");
jest.mock("../components/recipe_card/RecipeCard", () => jest.fn(() => null));

const mockedRecipes = [
  {
    name: "Chicken Parmesan",
    author: "Maria Valentina",
    country: "Italy",
    description:
      "A classic Italian dish of breaded chicken topped with tomato sauce and melted mozzarella cheese.",
    image:
      "https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_2560%2Cc_limit/Chicken-Parmesean-Recipe-Lede.jpg",
    ingredients: [
      {
        name: "chicken breasts",
        quantity: 2,
        unit: "pounds",
      },
      {
        name: "flour",
        quantity: 0.5,
        unit: "cup",
      },
      {
        name: "eggs",
        quantity: 2,
        unit: "whole",
      },
      {
        name: "bread crumbs",
        quantity: 1,
        unit: "cup",
      },
      {
        name: "tomato sauce",
        quantity: 1,
        unit: "cup",
      },
      {
        name: "mozzarella cheese",
        quantity: 1,
        unit: "cup",
      },
    ],
    preparation_time: 15,
    cooking_time: 20,
    servings: 4,
    directions: [
      "Preheat the oven to 400 degrees F.",
      "Cut the chicken breasts in half lengthwise to create thin cutlets.",
      "In a shallow dish, combine the flour and some salt and pepper.",
      "In a separate shallow dish, beat the eggs.",
      "In a third shallow dish, mix the bread crumbs with some grated Parmesan cheese.",
      "Dredge each chicken cutlet in the flour mixture, then dip it in the egg mixture, and then coat it with the bread crumb mixture, pressing gently to help the bread crumbs adhere.",
      "Heat some oil in a large oven-safe skillet over medium-high heat. Add the chicken cutlets and cook until they are golden brown on both sides, about 2 minutes per side.",
      "Pour the tomato sauce over the chicken and sprinkle with the mozzarella cheese. Transfer the skillet to the oven and bake until the cheese is melted and bubbly, about 10 minutes.",
      "Serve the chicken Parmesan with a side of pasta or a salad.",
    ],
    nutrition: {
      calories: 600,
      fat: 30,
      carbohydrates: 40,
      protein: 40,
    },
    id: 1,
  },
  {
    name: "Pad Thai",
    author: "Malee Saelim",
    country: "Thailand",
    description:
      "A popular Thai street food dish made with stir-fried rice noodles, eggs, and a variety of vegetables and seasonings.",
    image:
      "https://www.feastingathome.com/wp-content/uploads/2016/04/pad-thai-2.jpg",
    ingredients: [
      {
        name: "rice noodles",
        quantity: 8,
        unit: "ounces",
      },
      {
        name: "eggs",
        quantity: 2,
        unit: "whole",
      },
      {
        name: "bean sprouts",
        quantity: 1,
        unit: "cup",
      },
      {
        name: "green onions",
        quantity: 0.5,
        unit: "cup",
      },
      {
        name: "ground peanuts",
        quantity: 0.25,
        unit: "cup",
      },
      {
        name: "lime",
        quantity: 4,
        unit: "wedges",
      },
      {
        name: "fish sauce",
        quantity: 2,
        unit: "tablespoon",
      },
      {
        name: "brown sugar",
        quantity: 1,
        unit: "tablespoon",
      },
      {
        name: "red pepper flakes",
        quantity: 1,
        unit: "teaspoon",
      },
    ],
    preparation_time: 20,
    cooking_time: 30,
    servings: 2,
    directions: [
      "Soak the rice noodles in warm water for 30 minutes, then drain and set aside.",
      "In a large wok or skillet, heat some oil over medium-high heat. Add the eggs and scramble until cooked, then transfer to a plate and set aside.",
      "Add more oil to the wok or skillet and heat until hot. Add the drained rice noodles, bean sprouts, green onions, ground peanuts, and lime wedges. Stir-fry until the noodles are softened and heated through, about 5 minutes.",
      "Add the scrambled eggs, fish sauce, brown sugar, and red pepper flakes. Stir-fry until the ingredients are well combined and the noodles are coated with the sauce, about 2 minutes.",
      "Serve the pad Thai hot, garnished with additional ground peanuts and lime wedges, if desired.",
    ],
    nutrition: {
      calories: 800,
      fat: 30,
      carbohydrates: 100,
      protein: 30,
    },
    id: 2,
  }
];

describe("Recipes component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state", () => {
    useFetch.mockReturnValue({ data: null, isPending: true, error: null });
    useFlags.mockReturnValue({});

    render(<Recipes />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", async () => {
    useFetch.mockReturnValue({
      data: null,
      isPending: false,
      error: "An error occurred",
    });
    useFlags.mockReturnValue({});

    render(<Recipes />);

    expect(screen.getByText("An error occurred")).toBeInTheDocument();
  });

});
