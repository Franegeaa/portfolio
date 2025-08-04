import React, { useState } from 'react';
import ProjectCarousel from './ProjectCarousel';
import ProjectModal from './ProjectModal';

const Proyectos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Datos de los proyectos con información real
  const proyectos = [
    {
      titulo: "Bot de Control para Planta Industrial",
      descripcion: "Sistema de monitoreo y control de bombeo para planta industrial desarrollado en Node-RED con notificaciones por Telegram.",
      tecnologias: ["Node-RED", "Telegram API", "IoT", "Automation"],
      enlace: "https://github.com/Franegeaa/ProyectoNode-Red",
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
      enlace: "https://github.com/Franegeaa/emprende-frontend"
    },
    {
      titulo: "Sistema de Gestión de Stock",
      descripcion: "Aplicación completa para control de inventarios con frontend y backend separados. Gestión de productos y stock en tiempo real.",
      tecnologias: ["JavaScript", "HTML", "CSS", "Full-Stack"],
      enlace: "https://github.com/Franegeaa/stock-app"
    },
    {
      titulo: "Proyecto TPI React Deploy",
      descripcion: "Proyecto colaborativo universitario desarrollado en React con deployment automatizado. Trabajo en equipo con múltiples contribuidores.",
      tecnologias: ["React", "JavaScript", "CSS", "GitHub Actions"],
      enlace: "https://github.com/Franegeaa/react-deploy-tpi"
    },
    {
      titulo: "REST API Deploy",
      descripcion: "API REST desarrollada en Node.js con deployment en FL0. Backend robusto para aplicaciones web con arquitectura escalable.",
      tecnologias: ["Node.js", "API", "FL0", "JavaScript"],
      enlace: "https://github.com/Franegeaa/rest-api-deploy"
    }
  ];

  const handleProjectClick = (proyecto) => {
    if (proyecto.tieneModal) {
      setSelectedProject(proyecto);
      setCurrentImageIndex(0);
      setModalOpen(true);
    } else {
      window.open(proyecto.enlace, '_blank');
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.imagenes) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.imagenes.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.imagenes) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.imagenes.length - 1 : prevIndex - 1
      );
    }
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="proyectos" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Mis Proyectos
        </h2>
        
        <ProjectCarousel 
          projects={proyectos}
          onProjectClick={handleProjectClick}
        />
      </div>

      <ProjectModal
        isOpen={modalOpen}
        project={selectedProject}
        currentImageIndex={currentImageIndex}
        onClose={closeModal}
        onNextImage={nextImage}
        onPrevImage={prevImage}
        onSelectImage={selectImage}
      />
    </section>
  );
};

export default Proyectos;
