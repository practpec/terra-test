import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaChevronLeft, FaUser, FaChartBar, FaUsers, FaCog, FaSignOutAlt, FaQuestionCircle } from 'react-icons/fa';
import { RiListCheck2 } from "react-icons/ri";
import Logo from '../../assets/images/icono.png';

function NavMain() {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`flex h-screen`}>
      <div className={`bg-white h-full border-r border-gray-300 transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'}`}>
      <div className="flex items-center  mt-4 px-4">
        <img src={Logo} alt="Logo" className="h-10 w-10" />
        {isExpanded && (
          <h1 
            className="ml-1 text-2xl font-bold text-[#54A37C] transition-colors duration-300" // Cambié ml-2 a ml-1
          >
            erra-test 1.1
          </h1>
        )}
      </div>

        
        {isExpanded && (
          <div className="flex flex-col items-center mt-4">
            <div className="w-20 h-20 rounded-full border border-[#54A37C] flex items-center justify-center">
              <FaUser className="text-3xl" style={{ color: '#54A37C' }} />
            </div>
            <span className="mt-2 text-lg text-gray-800">Laboratorio</span>
          </div>
        )}

        <div className={`flex justify-center mt-2 ${isExpanded ? 'hidden' : ''}`}>
          <button 
            className="text-gray-800 p-2 focus:outline-none" 
            onClick={toggleNav}
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        <nav className={`ml-1 mt-4 flex flex-col items-start ${isExpanded ? 'items-start' : 'items-center'}`}>
          <ul className={`flex flex-col ${isExpanded ? 'items-start' : 'items-center'}`}>
          <Link to='/analysis'>
            <li className="text-gray-800 flex items-center p-2 hover:bg-gray-200 cursor-pointer hover:text-[#54A37C]"> 
                <FaChartBar className="text-lg" /> 
                {isExpanded && <span className="ml-4">Análisis</span>}
            </li>
            </Link>
            <Link to='/clients'>
            <li className="text-gray-800 flex items-center p-2 hover:bg-gray-200 cursor-pointer hover:text-[#54A37C]">
              <FaUsers className="text-lg" />
              {isExpanded && <span className="ml-4">Clientes</span>}
            </li>
            </Link>
            <Link to='/'> 
            <li className="text-gray-800 flex items-center p-2 hover:bg-gray-200 cursor-pointer hover:text-[#54A37C]">
              <RiListCheck2 className="text-lg" />
              {isExpanded && <span className="ml-4">Seguimiento</span>}
            </li>
            </Link>
            <li className="text-gray-800 flex items-center p-2 hover:bg-gray-200 cursor-pointer hover:text-[#54A37C]">
              <FaCog className="text-lg" />
              {isExpanded && <span className="ml-4">Configuración</span>}
            </li>
            <li className="text-gray-800 flex items-center p-2 hover:bg-gray-200 cursor-pointer hover:text-[#54A37C]">
              <FaQuestionCircle className="text-lg" />
              {isExpanded && <span className="ml-4">Ayuda</span>}
            </li>
            <Link to='/'> 
            <li className="text-gray-800 flex items-center p-2 hover:bg-gray-200 cursor-pointer hover:text-[#54A37C]">
              <FaSignOutAlt className="text-lg" />
              {isExpanded && <span className="ml-4">Cerrar Sesión</span>}
            </li>
            </Link>
          </ul>
        </nav>

        {isExpanded && (
          <div className="flex justify-center mt-4">
            <button 
              className="text-gray-800 p-2 focus:outline-none" 
              onClick={toggleNav}
            >
              <FaChevronLeft className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavMain;
