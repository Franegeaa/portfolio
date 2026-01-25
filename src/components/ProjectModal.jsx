import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({
  isOpen,
  project,
  currentImageIndex,
  onClose,
  onNextImage,
  onPrevImage,
  onSelectImage
}) => {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-gray-800 rounded-2xl max-w-5xl max-h-[95vh] overflow-hidden relative shadow-2xl border border-gray-700 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-gray-900/50 hover:bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition duration-200 backdrop-blur-md border border-white/10"
            >
              ×
            </button>

            {/* Título del proyecto */}
            <div className="bg-gray-900/90 text-white p-6 border-b border-gray-700">
              <h3 className="text-2xl font-bold">{project.titulo}</h3>
              <p className="text-sm text-gray-400 mt-1">{project.descripcion}</p>
            </div>

            {/* Contenedor de imagen */}
            {project.imagenes?.[currentImageIndex] && (
              <div className="relative bg-black flex flex-col h-[60vh] md:h-[70vh]">
                <div className="flex-1 relative flex items-center justify-center p-4">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    src={project.imagenes[currentImageIndex].src}
                    alt={project.imagenes[currentImageIndex].alt}
                    className="max-w-full max-h-full object-contain shadow-lg"
                  />

                  {/* Navegación dentro de la imagen */}
                  {(project.imagenes?.length > 1) && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); onPrevImage(); }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white rounded-full p-3 transition duration-200 backdrop-blur-sm"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); onNextImage(); }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white rounded-full p-3 transition duration-200 backdrop-blur-sm"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Descripción de la imagen */}
                <div className="bg-gray-900 p-4 border-t border-gray-800">
                  <p className="text-center text-gray-300 text-sm">
                    {project.imagenes[currentImageIndex].descripcion}
                  </p>
                </div>
              </div>
            )}

            {/* Footer con miniaturas */}
            <div className="bg-gray-900 p-4 border-t border-gray-800 flex flex-col gap-4">
              {(project.imagenes?.length > 1) && (
                <div className="flex justify-center gap-2 overflow-x-auto py-2">
                  {project.imagenes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => onSelectImage(i)}
                      className={`transition-all duration-200 rounded-md overflow-hidden border-2 ${i === currentImageIndex
                          ? 'border-blue-500 scale-110'
                          : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                    >
                      <img
                        src={project.imagenes[i].src}
                        className="w-16 h-10 object-cover"
                        alt={`thumbnail ${i}`}
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap justify-center gap-2">
                {project.tecnologias.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-blue-300 border border-blue-900/50 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
