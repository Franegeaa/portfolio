import React, { useState } from 'react';

const proyectos = [
  {
    titulo: "Bot para planta Deheza",
    descripcion: "Sistema de monitoreo en Node-RED con notificaciones por Telegram.",
    tecnologias: ["Node-RED", "Telegram API", "Modbus"],
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&crop=center",
    url: "https://github.com/Franegeaa/bot-planta-deheza", // Cambia por tu URL real
  },
  {
    titulo: "App tutorías UTN",
    descripcion: "Aplicación full-stack para organizar tutorías entre estudiantes.",
    tecnologias: ["React", "FastAPI", "PostgreSQL"],
    imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center",
    url: "https://github.com/Franegeaa/app-tutorias-utn", // Cambia por tu URL real
  },
  {
    titulo: "Chat en vivo con Socket.IO",
    descripcion: "App de mensajería en tiempo real con React y WebSockets.",
    tecnologias: ["React", "Socket.IO", "Node.js"],
    imagen: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop&crop=center",
    url: "https://github.com/Franegeaa/chat-socketio", // Cambia por tu URL real
  },
];

export default function Proyectos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((i) => (i + 1) % proyectos.length);
  const prevSlide = () => setCurrentIndex((i) => (i - 1 + proyectos.length) % proyectos.length);
  const goToSlide = (i) => setCurrentIndex(i);

  const getProjectAt = (offset) =>
    proyectos[(currentIndex + offset + proyectos.length) % proyectos.length];

  const prev = getProjectAt(-1);
  const current = getProjectAt(0);
  const next = getProjectAt(1);

  const Card = ({ project, small, onClick }) => {
    const handleClick = () => {
      if (small) {
        onClick();
      } else {
        // Si es la tarjeta central, abrir el proyecto en una nueva pestaña
        window.open(project.url, '_blank');
      }
    };

    return (
      <div
        className={`px-2 transition-all duration-500 ${
          small
            ? 'w-1/4 opacity-40 scale-75 blur-sm cursor-pointer'
            : 'w-1/2 opacity-100 scale-100 z-10 cursor-pointer'
        }`}
        onClick={handleClick}
      >
        <div className={`relative w-full bg-white rounded-lg shadow-${small ? 'md' : 'xl'} overflow-hidden group`}>
          <div
            className={`bg-cover bg-center ${small ? 'h-32' : 'h-48'}`}
            style={{ backgroundImage: `url(${project.imagen})` }}
          />
          <div className={`${small ? 'p-4' : 'p-6'}`}>
            <h3 className={`${small ? 'text-sm' : 'text-xl'} font-bold mb-1 text-black`}>{project.titulo}</h3>
            <p className={`${small ? 'text-xs' : 'text-sm'} text-gray-500`}>
              {project.tecnologias.slice(0, small ? 2 : undefined).join(", ")}
            </p>
          </div>
          {!small && (
            <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center p-4 text-sm text-center">
              <div>
                <p className="mb-2">{project.descripcion}</p>
                <p className="text-xs text-blue-300">Click para ver el proyecto →</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section 
      id="proyectos" 
      className="py-12 px-6"
    >
      <h2 className="text-3xl font-semibold text-center mb-12 text-white">Proyectos</h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex justify-center items-center px-16">
          <Card project={prev} small onClick={prevSlide} />
          <Card project={current} />
          <Card project={next} small onClick={nextSlide} />
        </div>

        {/** Flechas */}
        {[
          { onClick: prevSlide, icon: "M15 19l-7-7 7-7", position: "left-0" },
          { onClick: nextSlide, icon: "M9 5l7 7-7 7", position: "right-0" },
        ].map(({ onClick, icon, position }, i) => (
          <button
            key={i}
            onClick={onClick}
            className={`absolute ${position} top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition duration-300 z-10`}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
            </svg>
          </button>
        ))}

        {/** Indicadores */}
        <div className="flex justify-center mt-6 space-x-2">
          {proyectos.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                i === currentIndex ? 'bg-blue-400' : 'bg-white bg-opacity-60 hover:bg-opacity-80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
