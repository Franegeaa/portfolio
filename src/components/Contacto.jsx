import React from 'react';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

export default function Contacto() {
  return (
    <section id="contacto" className="py-12 px-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Contacto</h2>
      <p className="text-center text-white-600 mb-4">
        ¿Querés trabajar conmigo o charlar sobre un proyecto? Escribime:
      </p>

      <div className="text-center mb-6">
        <a
          href="mailto:fran.egea@example.com"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          egeafran02@gmail.com
        </a>
      </div>

      <div className="flex justify-center gap-6 text-2xl text-black-700">
        <a href="https://github.com/Franegeaa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/franciscoegea/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaLinkedin />
        </a>
        
      </div>
    </section>
  );
}
