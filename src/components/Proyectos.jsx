import React from 'react';

const proyectos = [
  {
    titulo: "Bot para planta Deheza",
    descripcion: "Sistema de monitoreo en Node-RED con notificaciones por Telegram.",
    tecnologias: ["Node-RED", "Telegram API", "Modbus"],
  },
  {
    titulo: "App tutorías UTN",
    descripcion: "Aplicación full-stack para organizar tutorías entre estudiantes.",
    tecnologias: ["React", "FastAPI", "PostgreSQL"],
  },
  {
    titulo: "Chat en vivo con Socket.IO",
    descripcion: "App de mensajería en tiempo real con React y WebSockets.",
    tecnologias: ["React", "Socket.IO", "Node.js"],
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-12 px-6 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-8">Proyectos</h2>

      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max px-4">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="relative group w-80 shrink-0 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{proyecto.titulo}</h3>
                <p className="text-sm text-gray-500">
                  {proyecto.tecnologias.join(", ")}
                </p>
              </div>

              {/* Overlay al hacer hover */}
              <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center p-4 text-sm text-center">
                {proyecto.descripcion}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
