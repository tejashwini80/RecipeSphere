import React, { useContext, useState } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';
import Footer from './Footer';
import Sidebar from '../components/Sidebar';
import Burger from '../assets/Burger.jpeg'
import Pizza from '../assets/Pizza.jpeg'
import Pasta from '../assets/Pasta.jpeg'

const Home = () => {
  const { recipes, fetchRecipes, addFavorite } = useContext(RecipeContext);
  const [ingredient, setIngredient] = useState('');
  const [hasSearched, setHasSearched] = useState(false); // To track if the user has searched

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(ingredient);
    setIngredient('');
    setHasSearched(true); // Update state to indicate search has been performed
  };

  const initialRecipes = [
    { id: 1, title: 'Spicy Burger', image: Burger},
    { id: 2, title: 'Aunthentic Cheesy Pizza', image:Pizza },
    { id: 3, title: 'White Sause Pasta', image:Pasta},
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-grow p-8">
        {/* Hero Section */}
        <section className="bg-blue-500 text-white rounded-md p-8 mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Discover Delicious Recipes</h2>
          <p className="text-lg">Enter an ingredient to find amazing recipes you can make today!</p>
        </section>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex justify-center mb-8">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="Enter ingredients (e.g., chicken, pasta)"
            className="border p-2 rounded-l-md w-1/2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md">
            Search
          </button>
        </form>

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {!hasSearched
            ? initialRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} addFavorite={addFavorite} />
              ))
            : recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} addFavorite={addFavorite} />
              ))}
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Home;
