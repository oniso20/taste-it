# TasteIT

Welcome to TasteIT, a web application where users can browse and contribute food recipes from around the world.

![TasteIT Preview](../taste-it/src/assets/images/TasteIT.jpg)

## Features

- Browse through a variety of food recipes from different countries
- Contribute your own food recipe and specify the country of origin
- View the country flag at the top of each recipe to easily see its country of origin
- Search for recipes by country, ingredient, and other food details
- View the full details of a recipe, including the recipe description, preparation steps, and ingredients

## Technology

TasteIT was built using the following technologies:

- React
- HTML
- CSS
- JSX
- JavaScript

We also utilized the `restcountries` API to fetch the country flag and use it for the country selection option when creating a new recipe.

You can learn more about the API here: https://restcountries.com/

The following modules were imported from react-router-dom:

- `useNavigate`
- `useParams`
- `query`

## Skills Learned

While working on this project, we learned how to use fetch hooks and implement search functionality using `useNavigate`, `useParams`, and `query`.

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all project dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

### `npm run build`

We hope you enjoy using TasteIT to discover and share delicious food recipes from around the world!
