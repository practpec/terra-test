// src/components/ContactUs.jsx
import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log('Formulario enviado:', formData);
    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">

        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-800 border bg-opacity-50 border-gray-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Información de contacto */}
        <div className="md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Información de Contacto</h2>
          <div className="space-y-4 px-20">
            <div>
              <h3 className="text-lg font-semibold">Dirección</h3>
              <p>123 Calle Principal, Ciudad, País</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Teléfono</h3>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Correo Electrónico</h3>
              <p>contacto@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
