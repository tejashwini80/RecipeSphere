import React, { createContext, useState } from 'react';
import axios from 'axios';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const addFavorite = (recipe) => {
    if (!favorites.some(fav => fav.id === recipe.id)) {
      const updatedFavorites = [...favorites, recipe];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const fetchRecipes = async (ingredient) => {
    if (!ingredient) return;
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=575dc6a0a4ae426db64f0577f707bc1d`);
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <RecipeContext.Provider value={{ recipes, favorites, addFavorite, removeFavorite, fetchRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider, RecipeContext };
