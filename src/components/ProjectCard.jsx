import React from 'react';

const ProjectCard = ({ project, small, onClick }) => {
  const handleClick = () => {
    if (small) {
      onClick();
    } else {
      // Si es el proyecto con modal, abrirlo; sino abrir GitHub
      if (project.tieneModal) {
        onClick(project);
      } else {
        window.open(project.enlace, '_blank');
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
          <h3 className={`${small ? 'text-sm' : 'text-xl'} font-bold mb-1 text-black`}>
            {project.titulo}
          </h3>
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

export default ProjectCard;
