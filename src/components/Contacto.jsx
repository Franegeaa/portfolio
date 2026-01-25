import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-800"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Contacto</h2>
        <p className="text-center text-gray-300 mb-8 text-lg">
          ¿Querés trabajar conmigo o charlar sobre un proyecto? <br />
          <span className="text-blue-400 font-semibold">¡Escribime!</span>
        </p>

        <div className="flex flex-col items-center gap-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:egeafran02@gmail.com"
            className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all font-medium text-lg"
          >
            <FaEnvelope className="text-xl" />
            egeafran02@gmail.com
          </motion.a>

          <div className="flex justify-center gap-8 text-3xl">
            <motion.a
              whileHover={{ y: -5, color: "#60a5fa" }}
              href="https://github.com/Franegeaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, color: "#0a66c2" }}
              href="https://www.linkedin.com/in/franciscoegeaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
