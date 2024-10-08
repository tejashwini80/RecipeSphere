import React from 'react';

const Sidebar = ({ email }) => {
  return (
    <aside className="w-64 rounded relative top-2 bg-blue-500 text-white p-4">
      <div className="flex items-center relative top-7 space-x-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <i className="fas fa-user"></i>
        </div>
        <div>
          
          <p className="text-2xl font-semibold">Me :</p>
        </div>
      </div>
      <ul className="mt-4 py-4 relative top-7  text-lg">
        <li className="px-2 py-6  hover:bg-gray-700 rounded">
          <a href="/">Home</a>
        </li>
        <li className="px-2 py-6  hover:bg-gray-700 rounded">
          <a href="/">Favorites</a>
        </li>
        <li className="px-2 py-6  hover:bg-gray-700 rounded">
          <a href="/">About</a>
        </li>
        
       
      </ul>
    </aside>
  );
};

export default Sidebar;
