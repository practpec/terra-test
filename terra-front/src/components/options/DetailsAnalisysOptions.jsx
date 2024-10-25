import React, { useState, useEffect } from 'react';

const DetailsAnalysisOptions = ({ client, analysis}) => {
  
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Detalles del Análisis</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 font-bold">Nombre del cliente:</label>
          <p>{client.name}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-bold">Número de Teléfono:</label>
          <p>{client.phone}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col">
          <label className="mb-1 font-bold">Nombre del proyecto:</label>
          <p>{analysis.name}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-bold">Ubicación:</label>
          <p>{analysis.location}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-bold">Estatus:</label>
          <p className={`text-sm font-medium mt-2 ${analysis.status === 'Activo' ? 'text-green-500' : 'text-red-500'}`}>{analysis.status}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-bold">Fecha de Inicio:</label>
          <p>{analysis.fecha_ini}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-bold">Fecha de Finalización:</label>
          <p>{analysis.fecha_fin}</p>
        </div>
        {analysis.status == 'Finalizado' && (
        <div className="flex flex-col">
        <button className="bg-[#54A37C] text-white px-4 py-2 border border-[#54A37C] hover:bg-[#4E9B68] transition w-2/3">
          Seguimiento
        </button>
        </div>)}
        
      </div>
      <div className="flex flex-col mt-4">
          <label className="mb-1 font-bold">Descripcion:</label>
          <p >{analysis.description}</p>
        </div>

    </div>
  );
};

export default DetailsAnalysisOptions;
