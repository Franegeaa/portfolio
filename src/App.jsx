import React from 'react';
import Header from './components/Header.jsx';
import SobreMi from './components/SobreMii.jsx';
import Proyectos from './components/Proyectos.jsx';
import Habilidades from './components/Habilidades.jsx';
import Contacto from './components/Contacto.jsx';

export default function App() {
  return (
    <main className="text-gray-100 min-h-screen font-sans relative overflow-hidden">
      {/* Fondo animado con imagen */}
      <div className="fixed inset-0 z-0">
        {/* Imagen de fondo principal con animación de zoom lento */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center')",
            animation: "backgroundZoom 20s ease-in-out infinite alternate"
          }}
        ></div>
        
        {/* Partículas flotantes animadas */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400 opacity-10 animate-float"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Overlay con gradiente animado */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/90"
          style={{
            animation: "gradientShift 15s ease-in-out infinite alternate"
          }}
        ></div>
      </div>
      
      {/* Contenido de la aplicación */}
      <div className="relative z-10">
        <Header />
        <SobreMi />
        <Proyectos />
        <Habilidades />
        <Contacto />
      </div>
      
      {/* Estilos CSS para las animaciones */}
      <style jsx>{`
        @keyframes backgroundZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes gradientShift {
          0% { opacity: 0.8; }
          100% { opacity: 0.9; }
        }
      `}</style>
    </main>
  );
}
