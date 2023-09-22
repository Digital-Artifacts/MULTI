import React from 'react';
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="bg-purple-500 p-4">
      <div className="container mx-auto flex  justify-between items-center">
        <a href='/' className="text-white text-2xl font-semibold">MULTI</a>
        <div className="hidden md:flex space-x-24 items-center">

        <Link className="text-white hover:text-gray-300" href='/'>
              Home
        </Link>

      
        <Link className="text-white hover:text-gray-300" href='/settings'>
              Settings
        </Link>


        <Link className="text-white hover:text-gray-300" href='/live'>
              Live
        </Link> 
      </div>
          
      <Link className="text-white hover:text-gray-300" href='/dashboard'>
              Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
