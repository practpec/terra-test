import React from 'react';
import NavMain from '../components/navs/NavMain';
import DetailsMonitoringOptions from '../components/options/DetailsMonitoringOptions';
import CardGeneralDetails from '../components/cards/CardGeneralDetails';
import CardZone from '../components/cards/CardZone';

export default function Monitoring() {
  const client = {
    name: 'Cliente A',
    phone: '123456789',
  };

  const analysis = {
    name: 'Análisis de Suelo 1',
    location: 'Ubicación A',
    status: 'Activo',
  };

  const detallesG = {
    technical_manager: 'Julio César Pérez Ortiz',
    date:'10-12-2024',
    description: 'Suelo arenoso',
    status: 'Activo',
    observations: 'Se recomienda riego adicional.',
    recommendations: 'Fertilizar cada dos semanas.',
    parameters: [
      { name: 'Humedad', value: '60', unit: '% RH' },
      { name: 'Temperatura', value: '25', unit: '°C' },
      { name: 'Conductividad', value: '1200', unit: 'µS/cm' },
      { name: 'pH', value: '6.5', unit: '' },
      { name: 'Nitrógeno', value: '0.2', unit: 'mg/kg' }, // Deficiente
      { name: 'Fósforo', value: '10', unit: 'mg/kg' },  // Deficiente
      { name: 'Potasio', value: '150', unit: 'mg/kg' },
      { name: 'Salinidad', value: '0.5', unit: 'mg/L' },
      { name: 'TDS', value: '200', unit: 'mg/L' },
    ],
    crops: [
      {
        name: 'Maíz',
        deficiencies: [
          { param: 'Nitrógeno', expected: '30-40 kg/ha' },
          { param: 'Fósforo', expected: '20-30 kg/ha' },
        ],
        percentage: 80,
      },
      {
        name: 'Sorgo',
        deficiencies: [
          { param: 'Potasio', expected: '10-20 kg/ha' },
        ],
        percentage: 70,
      },
    ],
  };

  const zonas = [
    {
      name: 'Zona 1',
      location: 'Ubicación A',
      depth: 50,
      description: 'Suelo arenoso',
      status: 'Activo',
      parameters: [
        { name: 'Humedad', value: '60', unit: '% RH' },
        { name: 'Temperatura', value: '25', unit: '°C' },
        { name: 'Conductividad', value: '1200', unit: 'µS/cm' },
        { name: 'pH', value: '6.5', unit: '' },
        { name: 'Nitrógeno', value: '0.2', unit: 'mg/kg' }, // Deficiente
        { name: 'Fósforo', value: '10', unit: 'mg/kg' },  // Deficiente
        { name: 'Potasio', value: '150', unit: 'mg/kg' },
        { name: 'Salinidad', value: '0.5', unit: 'mg/L' },
        { name: 'TDS', value: '200', unit: 'mg/L' },
      ],
      crops: [
        {
          name: 'Maíz',
          percentage: 80,
          deficiencies: [
            { param: 'Nitrógeno', value: '0.2', unit: 'mg/kg', expected: '> 0.4 mg/kg' },
            { param: 'Fósforo', value: '10', unit: 'mg/kg', expected: '> 20 mg/kg' },
          ],
        },
        {
          name: 'Frijol',
          percentage: 75,
          deficiencies: [
            { param: 'Nitrógeno', value: '0.2', unit: 'mg/kg', expected: '> 0.4 mg/kg' },
          ],
        },
        {
          name: 'Tomate',
          percentage: 60,
          deficiencies: [
            { param: 'Fósforo', value: '10', unit: 'mg/kg', expected: '> 20 mg/kg' },
          ],
        },
      ],
      observations: 'El suelo es adecuado, pero la conductividad es alta.',
      recommendations: 'Se recomienda reducir la salinidad.',
    },
    {
      name: 'Zona 2',
      location: 'Ubicación B',
      depth: 40,
      description: 'Suelo arcilloso',
      status: 'Inactivo',
      parameters: [
        { name: 'Humedad', value: '55', unit: '% RH' },
        { name: 'Temperatura', value: '23', unit: '°C' },
        { name: 'Conductividad', value: '950', unit: 'µS/cm' },
        { name: 'pH', value: '7.0', unit: '' },
        { name: 'Nitrógeno', value: '0.1', unit: 'mg/kg' }, // Deficiente
        { name: 'Fósforo', value: '5', unit: 'mg/kg' },    // Deficiente
        { name: 'Potasio', value: '300', unit: 'mg/kg' },
        { name: 'Salinidad', value: '0.3', unit: 'mg/L' },
        { name: 'TDS', value: '150', unit: 'mg/L' },
      ],
      crops: [
        {
          name: 'Maíz',
          percentage: 60,
          deficiencies: [
            { param: 'Nitrógeno', value: '0.1', unit: 'mg/kg', expected: 'Rango esperado: > 0.4 mg/kg' },
            { param: 'Fósforo', value: '5', unit: 'mg/kg', expected: 'Rango esperado: > 20 mg/kg' },
          ],
        },
        {
          name: 'Frijol',
          percentage: 70,
          deficiencies: [
            { param: 'Nitrógeno', value: '0.1', unit: 'mg/kg', expected: 'Rango esperado: > 0.4 mg/kg' },
          ],
        },
        {
          name: 'Tomate',
          percentage: 65,
          deficiencies: [
            { param: 'Fósforo', value: '5', unit: 'mg/kg', expected: 'Rango esperado: > 20 mg/kg' },
          ],
        },
      ],
      observations: 'El pH es adecuado para la mayoría de los cultivos.',
      recommendations: 'Se recomienda monitorear la humedad regularmente.',
    },
  ];
   
  return (
    <div className="flex h-screen">
      <NavMain />
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <DetailsMonitoringOptions client={client} analysis={analysis} />
        
        <h2 className="text-lg font-bold mb-2">Detalles generales</h2>
        <CardGeneralDetails detallesG={detallesG} />

        <h2 className="text-lg font-bold mb-2">Detalles por zona</h2>
        <div className="space-y-4">
          {zonas.map((zona, index) => (
            <CardZone key={index} zona={zona} />
          ))}
        </div>
      </div>
    </div>
  );
}
