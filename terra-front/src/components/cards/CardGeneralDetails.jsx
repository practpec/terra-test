import React from 'react';

export default function CardGeneralDetails({ detallesG }) {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-lg mb-4">
      <div className="grid grid-cols-3 gap-4">
      <p><strong>Encargado:</strong> {detallesG.technical_manager}</p>
        <p><strong>Fecha:</strong> {detallesG.date}</p>
        <p><strong>Estatus:</strong> {detallesG.status}</p>
      </div>
      <p><strong>Descripción:</strong> {detallesG.description}</p>

      <h4 className="font-bold mt-4">Parámetros:</h4>
      <div className="grid grid-cols-3">
        {detallesG.parameters.map((param, index) => (
          <div key={index}>
            <strong>{param.name}:</strong> {param.value} {param.unit}
          </div>
        ))}
      </div>

      <h4 className="font-bold mt-4">Observaciones:</h4>
      <p>{detallesG.observations}</p>

      <h4 className="font-bold mt-4">Recomendaciones:</h4>
      <p>{detallesG.recommendations}</p>

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
          {detallesG.crops.map((crop, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{crop.name}</td>
              <td className="border px-4 py-2">
                <ul>
                  {crop.deficiencies.map((deficiency, i) => (
                    <li key={i}>
                      <span className="text-sm text-gray-600">
                        {deficiency.param}: Rango esperado {deficiency.expected}
                      </span>
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
  );
}
