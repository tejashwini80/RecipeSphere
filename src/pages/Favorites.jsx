import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(RecipeContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map(recipe => (
            <div key={recipe.id} className="border rounded-lg overflow-hidden shadow-lg p-4">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover"/>
              <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
              <button
                onClick={() => removeFavorite(recipe.id)}
                className="bg-red-500 text-white px-2 py-1 rounded mt-2"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
