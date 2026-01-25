import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, small, onClick }) => {
  const handleClick = () => {
    if (small) {
      onClick();
    } else if (project.tieneModal) {
      onClick(project);
    } else {
      window.open(project.enlace, '_blank');
    }
  };

  return (
    <motion.div
      layout
      transition={{ duration: 0.5, type: 'spring' }}
      className={`px-2 cursor-pointer relative ${small
        ? 'w-1/4 opacity-40 scale-90 blur-[1px]'
        : 'w-1/2 opacity-100 scale-100 z-10'
        }`}
      onClick={handleClick}
      whileHover={!small ? { scale: 1.05, zIndex: 20 } : {}}
    >
      <div className={`relative w-full bg-gray-800 rounded-xl overflow-hidden group ${small ? 'shadow-md border border-gray-700' : 'shadow-2xl border-2 border-blue-500/30'
        }`}>
        <div
          className={`bg-cover bg-center transition-transform duration-700 group-hover:scale-110 ${small ? 'h-32' : 'h-64'}`}
          style={{ backgroundImage: `url(${project.imagen})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60`}></div>
        <div className={`relative ${small ? 'p-3' : 'p-6'}`}>
          <h3 className={`font-bold mb-1 text-white ${small ? 'text-sm' : 'text-2xl'}`}>
            {project.titulo}
          </h3>
          <p className={`text-gray-300 font-light ${small ? 'text-xs' : 'text-sm'}`}>
            {project.tecnologias.slice(0, small ? 2 : undefined).join(" • ")}
          </p>
        </div>
        {!small && (
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
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
