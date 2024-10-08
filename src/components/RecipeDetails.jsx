import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover"/>
      <p className="mt-2">Cooking Time: {recipe.readyInMinutes} minutes</p>
      <h3 className="mt-4">Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
