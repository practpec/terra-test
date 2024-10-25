import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMain from '../components/navs/NavMain';
import DetailsClientOptions from '../components/options/DetailsClientOptions';
import CardAnalysis from '../components/cards/CardAnalysis';

function DetailsClients() {
  const client = { 
    name: 'Cliente A', 
    state: 'Activo', 
    city: 'Ciudad A', 
    address: 'Dirección A', 
    phone: '123456789' 
  };

  const análisis = [
    { id:'ny3by4bcu34uc3uh', nombre: 'Análisis de Suelo 1', cliente: 'Cliente A', ubicacion: 'Ubicación A', fechaInicio: '2024-10-15', fechaFinalizacion: '2024-10-20', status: 'Activo' },
    { id:'iyt4ntcyt3by4rc4', nombre: 'Análisis de Suelo 2', cliente: 'Cliente B', ubicacion: 'Ubicación B', fechaInicio: '2024-10-14', fechaFinalizacion: '2024-10-18', status: 'Finalizado' },
    { id:'un483y7v8by3cy3c', nombre: 'Análisis de Suelo 3', cliente: 'Cliente C', ubicacion: 'Ubicación C', fechaInicio: '2024-10-10', fechaFinalizacion: '2024-10-15', status: 'Finalizado' },
  ];

  return (
    <div className="flex h-screen">
      <NavMain />
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <DetailsClientOptions client={client} />
        
        <div className="bg-white border border-gray-300 mt-4 p-4 space-y-4">
          {análisis.map((item, index) => (
            <Link 
            to={`/details-analysis/${item.id}`}>
            <CardAnalysis
              key={index}
              nombre={item.nombre}
              cliente={item.cliente}
              ubicacion={item.ubicacion}
              fechaInicio={item.fechaInicio}
              fechaFinalizacion={item.fechaFinalizacion}
              status={item.status}
            /></Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsClients;
