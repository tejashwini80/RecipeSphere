import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate must be inside a component wrapped in Router

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic (add validation as needed)
    if (email && password) {
      setIsLoggedIn(true); // Mark user as logged in
      navigate('/'); // Navigate to Home
    }
  };

  return (
    <section id="login" className="min-h-screen flex justify-center items-center p-8 bg-gray-800">
      <div className="w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 p-2 rounded bg-gray-700 text-white"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 p-2 rounded bg-gray-700 text-white"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
