import React from 'react';
import Header from './components/Header.jsx';
import SobreMi from './components/SobreMii.jsx';
import Proyectos from './components/Proyectos.jsx';
import Habilidades from './components/Habilidades.jsx';
import Contacto from './components/Contacto.jsx';

export default function App() {
  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen font-sans">
      <Header />
      <SobreMi />
      <Proyectos />
      <Habilidades />
      <Contacto />
    </main>
  );
}
