import React, { useState, useEffect } from 'react';

const DetailsClientOptions = ({ client }) => {
  const [name, setName] = useState(client.name);
  const [state, setState] = useState(client.state);
  const [city, setCity] = useState(client.city);
  const [address, setAddress] = useState(client.address);
  const [phone, setPhone] = useState(client.phone);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    if (client) {
      setName(client.name);
      setState(client.state);
      setCity(client.city);
      setAddress(client.address);
      setPhone(client.phone);
      setIsModified(false);
    }
  }, [client]);

  const handleChange = () => {
    setIsModified(true);
  };

  const handleUpdate = () => {
    console.log('Cliente actualizado:', { name, state, city, address, phone });
    setIsModified(false); 
  };

  if (!client) {
    return <p className="text-gray-500">No hay cliente seleccionado.</p>;
  }

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Detalles del Cliente</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1">Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              handleChange();
            }}
            placeholder="Nombre"
            className="border border-gray-300 p-2 mb-2 w-full bg-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Estado (de país):</label>
          <input
            type="text"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              handleChange();
            }}
            placeholder="Estado"
            className="border border-gray-300 p-2 mb-2 w-full bg-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Ciudad:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              handleChange();
            }}
            placeholder="Ciudad"
            className="border border-gray-300 p-2 mb-2 w-full bg-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Dirección:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              handleChange();
            }}
            placeholder="Dirección"
            className="border border-gray-300 p-2 mb-2 w-full bg-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Número de Teléfono:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              handleChange();
            }}
            placeholder="Número de Teléfono"
            className="border border-gray-300 p-2 mb-2 w-full bg-white"
          />
        </div>
      </div>
      {isModified && (
        <button
          onClick={handleUpdate}
          className="mt-4 bg-green-500 text-white px-4 py-2"
        >
          Modificar
        </button>
      )}
    </div>
  );
};

export default DetailsClientOptions;
