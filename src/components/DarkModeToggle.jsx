import React from 'react';

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white shadow-md"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}

export default DarkModeToggle;
