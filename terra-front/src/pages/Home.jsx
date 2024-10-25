import React from 'react';
import Nav from '../components/navs/NavOne';
import Start from '../components/landing_page/Start'
import ContactUs from '../components/landing_page/Contact';
function Home() {
    return (
      <div className="relative">
        <Nav />
        <section id="home" >
        <Start />
        </section>
        <section id="about" className="bg-gray-800 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Acerca de</h2>
            <p className="text-lg">
              Información sobre nuestra empresa y equipo.
            </p>
          </div>
        </section>
        <section id="services" className="bg-gray-900 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Servicios</h2>
            <p className="text-lg">
              Detalles de los servicios que ofrecemos.
            </p>
          </div>
        </section>
        <section id="contact" className="bg-black py-20 px-10">
          <ContactUs/>
        </section>
        
      </div>
    );
  }
  
  export default Home;
