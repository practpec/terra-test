import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Analysis from './pages/Analysis'; 
import DetailsAnalysis from './pages/DetailsAnalysis';
import Monitoring from './pages/Monitoring';
import Clients from './pages/Clients';
import DetailsClients from './pages/DetailsClients';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path='/details-analysis/:id' element={<DetailsAnalysis />} />
        <Route path="/monitoring/:id" element={<Monitoring />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/details-client/:id" element={<DetailsClients />} />


      </Routes>
    </Router>
  );
}

export default App;

