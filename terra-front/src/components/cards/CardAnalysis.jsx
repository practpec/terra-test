import React from 'react';

const CardAnalysis = ({ nombre, cliente, ubicacion, fechaInicio, fechaFinalizacion, status, isSelected }) => {
  return (
    <div className={`bg-white border-b border-gray-300 p-4 mb-4 w-full flex justify-between items-start`}>
      <div className="flex-1">
        <h2 className={`text-xl font-bold mb-2 ${isSelected ? 'text-[#54A37C]' : 'text-gray-800'}`}>{nombre}</h2>
        <p className="text-gray-700">Cliente: {cliente}</p>
        <p className="text-gray-700">Ubicación: {ubicacion}</p>
        <div className="flex space-x-4 mt-2">
          <p className="text-gray-700">Inicio: {fechaInicio}</p>
          <p className="text-gray-700">Finalización: {fechaFinalizacion}</p>
        </div>
      </div>
      <p className={`text-sm font-medium mt-2 ${status === 'Activo' ? 'text-green-500' : 'text-red-500'}`}> 
        {status}
      </p>
    </div>
  );
};

export default CardAnalysis;
