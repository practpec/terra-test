import React, { useState } from 'react';

export default function CardZone({ zona }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg">
      <div
        className="cursor-pointer bg-gray-200 p-4 flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold">{zona.name}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="p-4 bg-white">
          <div className="grid grid-cols-3 gap-4">
            <p><strong>Ubicación:</strong> {zona.location}</p>
            <p><strong>Profundidad:</strong> {zona.depth} cm</p>
            <p><strong>Estatus:</strong> {zona.status}</p>
          </div>
          <p><strong>Descripción:</strong> {zona.description}</p>
          
          <h4 className="font-bold mt-4">Parámetros:</h4>
          <div className="grid grid-cols-3">
            {zona.parameters.map((param, index) => (
              <div key={index}>
                <strong>{param.name}:</strong> {param.value} {param.unit}
              </div>
            ))}
          </div>

          <h4 className="font-bold mt-4">Observaciones:</h4>
          <p>{zona.observations}</p>

          <h4 className="font-bold mt-4">Recomendaciones:</h4>
          <p>{zona.recommendations}</p>

            <h4 className="font-bold mt-4">Cultivos:</h4>
              <table className="w-full table-auto border-collapse border border-gray-300 mt-2">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Cultivo</th>
                    <th className="border px-4 py-2">Detalles de Deficiencias</th>
                    <th className="border px-4 py-2">Apto</th>
                  </tr>
                </thead>
                <tbody>
                  {zona.crops.map((crop, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{crop.name}</td>
                      <td className="border px-4 py-2">
                        <ul>
                          {crop.deficiencies.map((deficiency, i) => (
                            <li key={i}>
                              <span className="text-sm text-gray-600">{deficiency.param}: Rango esperado {deficiency.expected}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="border px-4 py-2">{crop.percentage}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
        </div>
      )}
    </div>
  );
}
