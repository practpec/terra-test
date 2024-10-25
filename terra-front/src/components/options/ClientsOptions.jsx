import React from 'react';

const ClientsOptions = () => {
  return (
    <div className="bg-gray-100 p-2 mb-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar cliente..."
            className="border border-gray-300 px-4 py-2 w-3/3"
          />
          
        </div>
        <button className="bg-[#54A37C] text-white px-4 py-2 border border-[#54A37C] hover:bg-[#4E9B68] transition"> 
          Agregar Cliente
        </button>
      </div>
    </div>
  );
};

export default ClientsOptions;

