import React from 'react';

const CardClients = ({ nombre, direccion, telefono, numeroProyectos, isSelected }) => {
  return (
    <div className={`bg-white border-b border-gray-300 p-4 mb-4 w-full flex justify-between items-start`}>
      <div className="flex-1">
        <h2 className={`text-xl font-bold mb-2 ${isSelected ? 'text-[#54A37C]' : 'text-gray-800'}`}>{nombre}</h2> 
        <p className="text-gray-700">Dirección: {direccion}</p>
        <p className="text-gray-700">Teléfono: {telefono}</p>
      </div>
      <p className="text-gray-700">No. Proy: {numeroProyectos}</p>
    </div>
  );
};

export default CardClients;
