import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  const handleClick = () => {
    if (project.tieneModal) {
      onClick(project);
    } else {
      window.open(project.enlace, '_blank');
    }
  };

  return (
    <motion.div
      layout
      transition={{ duration: 0.3 }}
      className="w-full cursor-pointer relative group"
      onClick={handleClick}
      whileHover={{ y: -5 }}
    >
      <div className="relative w-full bg-gray-800 rounded-xl overflow-hidden shadow-2xl border-2 border-blue-500/30">
        <div
          className="bg-cover bg-center transition-transform duration-700 group-hover:scale-110 h-64"
          style={{ backgroundImage: `url(${project.imagen})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60"></div>
        <div className="relative p-6">
          <h3 className="font-bold mb-1 text-white text-2xl">
            {project.titulo}
          </h3>
          <p className="text-gray-300 font-light text-sm">
            {project.tecnologias.join(" • ")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm text-white flex items-center justify-center p-6 text-center transition-all duration-300"
        >
          <div>
            <p className="mb-4 text-lg font-light leading-relaxed">{project.descripcion}</p>
            <span className="inline-block px-6 py-2 border border-blue-400 text-blue-400 rounded-full text-sm font-semibold hover:bg-blue-400 hover:text-white transition-colors">
              {project.tieneModal ? "Ver Detalles" : "Visitar Sitio"}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
