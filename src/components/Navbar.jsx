import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu
  const location = useLocation(); // Get the current route path

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-blue-600 dark:bg-blue-800 text-white shadow-lg">
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="text-xl font-bold tracking-wide">Dashboard</div>
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Links for Desktop */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } w-full md:flex md:w-auto md:flex-row flex-col lg:items-center ite  gap-4 mt-4 md:mt-0`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)} // Close dropdown on link click
          className={`hover:underline ${
            location.pathname === '/'
              ? 'font-semibold underline'
              : 'font-normal'
          }`}
        >
          Weather
        </Link>
        <Link
          to="/news"
          onClick={() => setIsOpen(false)} // Close dropdown on link click
          className={`hover:underline ${
            location.pathname === '/news'
              ? 'font-semibold underline'
              : 'font-normal'
          }`}
        >
          News
        </Link>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </nav>
  );
}

export default Navbar;
