import React, { useState, useEffect } from 'react';

const DetailsMonitoringOptions = ({ client, analysis}) => {
  
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Detalles del Monitoreo</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 font-bold">Nombre del cliente:</label>
          <p>{client.name}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-bold">Número de Teléfono:</label>
          <p>{client.phone}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-bold">Nombre del proyecto:</label>
          <p>{analysis.name}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-bold">Ubicacion:</label>
          <p>{analysis.location}</p>
        </div>
        {/*Recordar que este sera el estatus del monitoreo no del proyecto*/}
        <div className="flex flex-col">
          <label className="mb-1 font-bold">Estatus:</label>
          <p className={`text-sm font-medium mt-2 ${analysis.status === 'Activo' ? 'text-green-500' : 'text-red-500'}`}>{analysis.status}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsMonitoringOptions;
