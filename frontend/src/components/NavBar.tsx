import React from 'react';
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="sticky p-4 top-0 z-10 backdrop-blur-sm  text-xl font-bold drop-shadow-xl flex-none transition-colors duration-500  ">
      <div className="container mx-auto flex  justify-between items-center">
       < a href="/" className="ml-10">   
      <img
                  src="logo.png"
                  alt=""
                  width="100"
                  height="100"
                  className=""
                />
                </a>
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
