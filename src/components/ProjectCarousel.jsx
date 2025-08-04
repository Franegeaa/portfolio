import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectCarousel = ({ projects, onProjectClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const getProjectAt = (offset) => {
    const index = (currentIndex + offset + projects.length) % projects.length;
    return projects[index];
  };

  const prev = getProjectAt(-1);
  const current = getProjectAt(0);
  const next = getProjectAt(1);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Contenedor del carrusel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
          }}
        >
          {/* Proyecto anterior (difuminado) */}
          <ProjectCard
            project={prev}
            small={true}
            onClick={() => prevSlide()}
          />
          
          {/* Proyecto actual (principal) */}
          <ProjectCard
            project={current}
            small={false}
            onClick={() => onProjectClick(current)}
          />
          
          {/* Proyecto siguiente (difuminado) */}
          <ProjectCard
            project={next}
            small={true}
            onClick={() => nextSlide()}
          />
        </div>
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition duration-300 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition duration-300 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentIndex 
                ? 'bg-blue-500' 
                : 'bg-white bg-opacity-30 hover:bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
