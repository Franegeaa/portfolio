import React from 'react';

const habilidades = [
  { nombre: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { nombre: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { nombre: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { nombre: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { nombre: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { nombre: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { nombre: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { nombre: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { nombre: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { nombre: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { nombre: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center text-white">Habilidades</h2>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
        {habilidades.map((habilidad, index) => (
          <div 
            key={index}
            className="group relative p-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
          >
            <img
              src={habilidad.logo}
              alt={habilidad.nombre}
              className="w-12 h-12 object-contain filter transition-all duration-300 group-hover:drop-shadow-lg"
            />
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {habilidad.nombre}
              {/* Flecha del tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
