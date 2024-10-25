import React, { useState } from 'react';
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";
import Logo from '../assets/images/icono.png';
import Plant from '../assets/images/plant.jpg';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-5 lg:px-8">
      {/* Contenedor principal con borde y responsive */}
      <div className="max-w-4xl w-full bg-white shadow-lg border border-gray-300 flex flex-col lg:flex-row">
        {/* Logo y título centrados, responsive */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <img src={Logo} alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12" />
          <h1 className="ml-2 text-xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#54A37C' }}>Terra-test</h1>
        </div>

        {/* Formulario, responsive */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6" style={{ color: '#54A37C' }}>Inicia sesión</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm sm:text-base text-gray-700">Correo electrónico</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2"
                style={{ focusRingColor: '#54A37C' }}
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base text-gray-700">Contraseña</label>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2"
                  style={{ focusRingColor: '#54A37C' }}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 text-gray-600 flex items-center"
                >
                  {passwordVisible ? <LiaEyeSlashSolid size={20} /> : <LiaEyeSolid size={20} />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white transition duration-300"
              style={{ backgroundColor: '#54A37C', hoverBackgroundColor: '#46996C' }}
            >
              Ingresar
            </button>
          </form>
        </div>

        {/* Imagen con capa negra, sin bordes redondeados, y desaparece en móvil */}
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto hidden lg:block"> {/* Cambié esto para ocultar la imagen en móviles */}
          <img
            src={Plant}
            alt="Imagen del laboratorio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
