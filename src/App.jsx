import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Login from './pages/Login'; // Import the login component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  return (
    <RecipeProvider>
      <Router>
        <Header />
        <Routes>
          {/* Conditionally render the routes based on login status */}
          <Route
            path="/"
            element={
              isLoggedIn ? <Home /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/favorites"
            element={
              isLoggedIn ? <Favorites /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </Router>
    </RecipeProvider>
  );
};

export default App;
