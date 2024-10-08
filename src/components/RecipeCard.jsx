import React from 'react';

const RecipeCard = ({ recipe, addFavorite }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover"/>
      <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
      <button
        onClick={() => addFavorite(recipe)}
        className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default RecipeCard;
