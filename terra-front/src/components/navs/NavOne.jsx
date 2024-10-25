// src/components/Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-50 p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-xl sm:text-2xl font-bold">
          <a href="#home">Mi Landing Page</a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#home"
            className="text-white text-xs sm:text-sm md:text-base lg:text-lg hover:text-blue-500 transition-colors duration-300"
          >
            Inicio
          </a>
          <a
            href="#about"
            className="text-white text-xs sm:text-sm md:text-base lg:text-lg hover:text-blue-500 transition-colors duration-300"
          >
            Acerca de
          </a>
          <a
            href="#services"
            className="text-white text-xs sm:text-sm md:text-base lg:text-lg hover:text-blue-500 transition-colors duration-300"
          >
            Servicios
          </a>
          <a
            href="#contact"
            className="text-white text-xs sm:text-sm md:text-base lg:text-lg hover:text-blue-500 transition-colors duration-300"
          >
            Contacto
          </a>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Iniciar sesión
          </Link>
        </div>
        <button
          onClick={handleToggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <a
          href="#home"
          className="block text-white text-sm py-2 px-4 hover:bg-blue-600 transition-colors duration-300"
          onClick={handleToggleMenu}
        >
          Inicio
        </a>
        <a
          href="#about"
          className="block text-white text-sm py-2 px-4 hover:bg-blue-600 transition-colors duration-300"
          onClick={handleToggleMenu}
        >
          Acerca de
        </a>
        <a
          href="#services"
          className="block text-white text-sm py-2 px-4 hover:bg-blue-600 transition-colors duration-300"
          onClick={handleToggleMenu}
        >
          Servicios
        </a>
        <a
          href="#contact"
          className="block text-white text-sm py-2 px-4 hover:bg-blue-600 transition-colors duration-300"
          onClick={handleToggleMenu}
        >
          Contacto
        </a>
        <Link
          to="/login"
          className="block text-white text-sm py-2 px-4 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
          onClick={handleToggleMenu}
        >
          Iniciar sesión
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
