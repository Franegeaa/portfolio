import React, { useState } from 'react';

const proyectos = [
  {
    titulo: "Bot de Control para Planta Industrial",
    descripcion: "Sistema de monitoreo y control de bombeo para planta industrial desarrollado en Node-RED con notificaciones por Telegram.",
    tecnologias: ["Node-RED", "Telegram API", "IoT", "Automation"],
    imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop&crop=center",
    url: "https://github.com/Franegeaa/ProyectoNode-Red",
    tieneModal: true,
    imagenes: [
      {
        src: "/images/node-red-bot/flujo-principal.png",
        alt: "Flujo principal Node-RED con controlador Modbus",
        descripcion: "Arquitectura del sistema: conexión Modbus, lectura de sensores y control de bombas"
      },
      {
        src: "/images/node-red-bot/bot-menu.png", 
        alt: "Interfaz del bot de Telegram mostrando opciones",
        descripcion: "Menú principal del bot: EB Entrada, Laguna 1, Laguna 2, TGBT"
      },
      {
        src: "/images/node-red-bot/estado-sistema.png",
        alt: "Estado completo del sistema de bombeo",
        descripcion: "Monitoreo en tiempo real: estado de bombas, niveles de pozo y alertas"
      },
      {
        src: "/images/node-red-bot/codigo-verificacion.png",
        alt: "Código JavaScript para verificación de comandos",
        descripcion: "Lógica de procesamiento de mensajes y validación de comandos en Node-RED"
      }
    ]
  },
  {
    titulo: "Plataforma Emprende",
    descripcion: "Aplicación full-stack para emprendedores con frontend en React y backend completo. Proyecto colaborativo con gestión de usuarios.",
    tecnologias: ["React", "JavaScript", "Node.js", "Full-Stack"],
    imagen: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
    url: "https://github.com/Franegeaa/emprende-frontend",
  },
  {
    titulo: "Sistema de Gestión de Stock",
    descripcion: "Aplicación completa para control de inventarios con frontend y backend separados. Gestión de productos y stock en tiempo real.",
    tecnologias: ["JavaScript", "HTML", "CSS", "Full-Stack"],
    imagen: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop&crop=center",
    url: "https://github.com/Franegeaa/stock-app",
  },
  {
    titulo: "Proyecto TPI React Deploy",
    descripcion: "Proyecto colaborativo universitario desarrollado en React con deployment automatizado. Trabajo en equipo con múltiples contribuidores.",
    tecnologias: ["React", "JavaScript", "CSS", "GitHub Actions"],
    imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center",
    url: "https://github.com/Franegeaa/react-deploy-tpi",
  },
  {
    titulo: "REST API Deploy",
    descripcion: "API REST desarrollada en Node.js con deployment en FL0. Backend robusto para aplicaciones web con arquitectura escalable.",
    tecnologias: ["Node.js", "API", "FL0", "JavaScript"],
    imagen: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop&crop=center",
    url: "https://github.com/Franegeaa/rest-api-deploy",
  },
];

export default function Proyectos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const nextSlide = () => setCurrentIndex((i) => (i + 1) % proyectos.length);
  const prevSlide = () => setCurrentIndex((i) => (i - 1 + proyectos.length) % proyectos.length);
  const goToSlide = (i) => setCurrentIndex(i);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject?.imagenes) {
      setCurrentImageIndex((i) => (i + 1) % selectedProject.imagenes.length);
    }
  };

  const prevImage = () => {
    if (selectedProject?.imagenes) {
      setCurrentImageIndex((i) => (i - 1 + selectedProject.imagenes.length) % selectedProject.imagenes.length);
    }
  };

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
        // Si es el proyecto con modal, abrirlo; sino abrir GitHub
        if (project.tieneModal) {
          openModal(project);
        } else {
          window.open(project.url, '_blank');
        }
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
                <p className="text-xs text-blue-300">
                  {project.tieneModal ? "Click para ver capturas del proyecto →" : "Click para ver el proyecto →"}
                </p>
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

      {/** Modal para mostrar imágenes del proyecto */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden relative">
            {/** Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition duration-200"
            >
              ×
            </button>

            {/** Título del proyecto */}
            <div className="bg-gray-900 text-white p-4">
              <h3 className="text-xl font-bold">{selectedProject.titulo}</h3>
              <p className="text-sm text-gray-300">{selectedProject.descripcion}</p>
            </div>

            {/** Contenedor de imagen */}
            <div className="relative">
              {selectedProject.imagenes && selectedProject.imagenes[currentImageIndex] && (
                <div className="text-center">
                  <img
                    src={selectedProject.imagenes[currentImageIndex].src}
                    alt={selectedProject.imagenes[currentImageIndex].alt}
                    className="max-w-full max-h-[60vh] mx-auto object-contain"
                  />
                  
                  {/** Descripción de la imagen */}
                  <div className="p-4 bg-gray-50">
                    <p className="text-sm text-gray-700 font-medium">
                      {selectedProject.imagenes[currentImageIndex].descripcion}
                    </p>
                  </div>
                </div>
              )}

              {/** Navegación de imágenes */}
              {selectedProject.imagenes && selectedProject.imagenes.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/** Indicadores de imagen */}
            {selectedProject.imagenes && selectedProject.imagenes.length > 1 && (
              <div className="flex justify-center p-4 space-x-2">
                {selectedProject.imagenes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition duration-200 ${
                      i === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}

            {/** Tecnologías */}
            <div className="p-4 bg-gray-100 border-t">
              <p className="text-sm text-gray-600 mb-2">Tecnologías utilizadas:</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tecnologias.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
