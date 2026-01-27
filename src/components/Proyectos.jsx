import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Proyectos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Datos de los proyectos con información real
  const proyectos = [
    {
      titulo: "Planificador de Tareas",
      descripcion: "Aplicación de planificación y priorización de Ordenes de Trabajo para optimizar la productividad diaria",
      tecnologias: ["Python", "Streamlit", "SQLServer"],
      imagen: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=500&h=300&fit=crop&crop=center",
      enlace: "https://priorizacion-demo.netlify.app"
    },
    {
      titulo: "Bot de Control para Planta Industrial",
      descripcion: "Sistema de monitoreo y control de bombeo para planta industrial desarrollado en Node-RED con notificaciones por Telegram.",
      tecnologias: ["Node-RED", "Telegram API", "IoT", "Automation"],
      imagen: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&crop=center",
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
    if (selectedProject?.imagenes) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.imagenes.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.imagenes) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.imagenes.length - 1 : prev - 1
      );
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="proyectos"
      className="py-20 text-white relative z-10"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
        >
          Proyectos Principales
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                project={proyecto}
                onClick={handleProjectClick}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={modalOpen}
        project={selectedProject}
        currentImageIndex={currentImageIndex}
        onClose={closeModal}
        onNextImage={nextImage}
        onPrevImage={prevImage}
        onSelectImage={setCurrentImageIndex}
      />
    </motion.section>
  );
};

export default Proyectos;
