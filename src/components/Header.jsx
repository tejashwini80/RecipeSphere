import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between  ">
      <h1 className="text-2xl  transition duration-200">Recipe Finder</h1>
      <nav>
        <Link to="/" className="mx-2 hover:text-black  transition duration-200 hover:scale-150 ">Home</Link>
        <Link to="/favorites" className="mx-2 hover:text-black transition duration-200">Favorites</Link>
      </nav>
    </header>
  );
};

export default Header;
