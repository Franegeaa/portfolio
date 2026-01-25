import React from 'react';
import { motion } from 'framer-motion';

const habilidades = [
  { nombre: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { nombre: 'Streamlit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg' },
  { nombre: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { nombre: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { nombre: 'SQLserver', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
  { nombre: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { nombre: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { nombre: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { nombre: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { nombre: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { nombre: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { nombre: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-20 px-4 max-w-5xl mx-auto relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center text-white"
      >
        Habilidades Técnicas
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center"
      >
        {habilidades.map((habilidad, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.1, rotate: 5, zIndex: 50 }}
            className="group relative p-4 bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-colors duration-300 w-24 h-24 flex items-center justify-center shadow-lg"
          >
            <img
              src={habilidad.logo}
              alt={habilidad.nombre}
              className={`w-14 h-14 object-contain filter drop-shadow-md group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300 ${habilidad.nombre === 'GitHub' ? 'invert' : ''}`}
            />
            {/* Tooltip */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-blue-200 text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-blue-900/30">
              {habilidad.nombre}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-t border-l border-blue-900/30"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
