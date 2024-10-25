import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMain from '../components/navs/NavMain';
import DetailsAnalysisOptions from '../components/options/DetailsAnalisysOptions';
import CardMonitoring from '../components/cards/CardMonitoring';

function DetailsAnalysis() {
  const client = { 
    name: 'Cliente A', 
    phone: '123456789' 
  };
  const analysis = {
    name: 'Análisis de Suelo 1',
    location:'Ubicacion A',
    status:'Activo',
    fecha_ini: '2024-10-20',
    fecha_fin: '2024-10-20',
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci error, voluptate sunt deleniti neque exercitationem iure in quisquam delectus distinctio consectetur obcaecati reiciendis mollitia asperiores? Qui assumenda velit natus nulla!'
  }
  const monitoring = [
    { id:'8n384y74by834t3vnyu89', num: 1, fecha: '2024-10-20', status: 'Activo' },
    { id:'nuy37yc3yib7by4rcyct4', num: 2, fecha: '2024-10-20', status: 'Finalizado' },
    { id:'hnernhu4yby3tyr3ccty3', num: 3, fecha: '2024-10-20', status: 'Finalizado' }
   
  ];

  return (
    <div className="flex h-screen">
      <NavMain />
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <DetailsAnalysisOptions client={client} analysis={analysis} />
        <h2 className="text-lg font-bold mb-2">Monitoreo del Análisis</h2>
        <div className="bg-white border border-gray-300 mt-4 p-4 space-y-4">
          {monitoring.map((item, index) => (
            <Link 
            to={`/monitoring/${item.id}`}>
            <CardMonitoring
              key={index}
              num={item.num}
              fecha={item.fecha}
              status={item.status}
            /></Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsAnalysis;
