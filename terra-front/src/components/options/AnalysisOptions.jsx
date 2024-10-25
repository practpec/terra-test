import React from 'react';

const AnalysisOptions = () => {
  return (
    <div className="bg-gray-100 p-2 mb-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar análisis..."
            className="border border-gray-300 px-4 py-2 w-2/3" // Sin bordes redondeados
          />
          <select className="border border-gray-300 px-4 py-2 w-2/4">  // Sin bordes redondeados
            <option value="">Ordenar por</option>
            <option value="fecha">Fecha</option>
            <option value="nombre">Nombre</option>
            <option value="completados">Completados</option>
            <option value="enCurso">En curso</option>
          </select>
        </div>
        <button className="bg-[#54A37C] text-white px-4 py-2 border border-[#54A37C] hover:bg-[#4E9B68] transition"> {/* Botón verde */}
          Crear Análisis
        </button>
      </div>
    </div>
  );
};

export default AnalysisOptions;

