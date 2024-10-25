import React from 'react';
import HomeImage from '../../assets/images/fondo.jpg';

function Start() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${HomeImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Bienvenido a Nuestra Página</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6">Explora lo que tenemos para ofrecer y contáctanos para más información.</p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
}

export default Start;
