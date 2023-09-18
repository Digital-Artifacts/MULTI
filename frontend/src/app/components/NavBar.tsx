import React from 'react';
import dashboard from '../pages/dashboard';
import settings from '../pages/settings';
import live from '../pages/live';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex  justify-between items-center">
        <a href='/' className="text-white text-2xl font-semibold">MULTI</a>
        <div className="hidden md:flex space-x-4 items-center">
        <Link to="/">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
        </Link>
        
        <Link to="/">
          <a href="dashboard" className="text-white hover:text-gray-300">Dashboard</a>
        </Link>

        <Link to="/">
          <a href="/settings" className="text-white hover:text-gray-300">Settings</a>
        </Link>

        <Link to="/">
          <a href="live" className="text-white hover:text-gray-300">Live</a>
        </Link>  
      </div>
          
          <a href="#" className="text-white hover:text-gray-300">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;
