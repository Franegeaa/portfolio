import React from 'react';

const ProjectModal = ({ 
  isOpen, 
  project, 
  currentImageIndex, 
  onClose, 
  onNextImage, 
  onPrevImage, 
  onSelectImage 
}) => {
  if (!isOpen || !project) return null;

  const currentImage = project.imagenes?.[currentImageIndex];
  const hasMultipleImages = project.imagenes?.length > 1;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden relative">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition duration-200"
        >
          ×
        </button>

        {/* Título del proyecto */}
        <div className="bg-gray-900 text-white p-4">
          <h3 className="text-xl font-bold">{project.titulo}</h3>
          <p className="text-sm text-gray-300">{project.descripcion}</p>
        </div>

        {/* Contenedor de imagen */}
        {currentImage && (
          <div className="relative">
            <div className="text-center">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-[60vh] mx-auto object-contain"
              />
              
              {/* Descripción de la imagen */}
              <div className="p-4 bg-gray-50">
                <p className="text-sm text-gray-700 font-medium">
                  {currentImage.descripcion}
                </p>
              </div>
            </div>

            {/* Navegación de imágenes */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={onPrevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={onNextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        )}

        {/* Indicadores de imagen */}
        {hasMultipleImages && (
          <div className="flex justify-center p-4 space-x-2">
            {project.imagenes.map((_, i) => (
              <button
                key={i}
                onClick={() => onSelectImage(i)}
                className={`w-2 h-2 rounded-full transition duration-200 ${
                  i === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}

        {/* Tecnologías */}
        <div className="p-4 bg-gray-100 border-t">
          <p className="text-sm text-gray-600 mb-2">Tecnologías utilizadas:</p>
          <div className="flex flex-wrap gap-2">
            {project.tecnologias.map((tech, i) => (
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
  );
};

export default ProjectModal;
