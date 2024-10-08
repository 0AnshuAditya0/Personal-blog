// Mark this as a Client Component
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and update the HTML root element class
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  // On initial load, check if dark mode is already enabled
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      {/* Navbar Links */}
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="bg-gray-600 p-2 rounded-full focus:outline-none"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5a6.5 6.5 0 010-13v13z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 011.484 15.9c-.505.058-1.017.1-1.484.1a8 8 0 01-1.484-15.9c.505-.058 1.017-.1 1.484-.1zM10 18a7.988 7.988 0 01-4.905-1.778 8.008 8.008 0 01-.57-10.8 8.008 8.008 0 0110.8-.57A7.988 7.988 0 0110 18z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
