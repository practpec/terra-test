import React from 'react'; 
import NavMain from '../components/navs/NavMain';
import ClientsOptions from '../components/options/ClientsOptions';
import CardClients from '../components/cards/CardClients';
import { Link } from 'react-router-dom';

function Clients() {
  const clientes = [
    { id:'bnugeygvyhbrh', nombre: 'Cliente A', direccion: 'Dirección A', telefono: '123456789', numeroProyectos: 2 },
    { id:'bnugeygvinchuiyr4uyhbrh', nombre: 'Cliente B', direccion: 'Dirección B', telefono: '987654321', numeroProyectos: 3 },
    { id:'bnugeygvyy4r3tytyecyhbrh', nombre: 'Cliente C', direccion: 'Dirección C', telefono: '456123789', numeroProyectos: 1 },
  ];

  return (
    <div className="flex h-screen">
      <NavMain />
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto"> 
        <ClientsOptions />
        <div className="bg-white border border-gray-300 mt-4 p-4 space-y-4">
          {clientes.map((item, index) => (
            <Link 
            to={`/details-client/${item.id}`}>
            <CardClients
              key={index}
              nombre={item.nombre}
              direccion={item.direccion}
              telefono={item.telefono}
              numeroProyectos={item.numeroProyectos}
            /></Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
