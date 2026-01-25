import React from 'react';
import Header from './components/Header.jsx';
import SobreMi from './components/SobreMii.jsx';
import Proyectos from './components/Proyectos.jsx';
import Habilidades from './components/Habilidades.jsx';
import Contacto from './components/Contacto.jsx';

export default function App() {
  return (
    <main className="text-gray-100 min-h-screen font-sans relative overflow-hidden selection:bg-cyan-500 selection:text-white">
      {/* Fondo animado con framer-motion */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center')",
          }}
        />

        {/* Overlay con gradiente animado y backdrop blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-[2px]"></div>

        {/* Elementos decorativos flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Contenido de la aplicación */}
      <div className="relative z-10">
        <Header />
        <SobreMi />
        <Proyectos />
        <Habilidades />
        <Contacto />
      </div>


    </main>
  );
}
