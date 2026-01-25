import React from 'react';
import { motion } from 'framer-motion';

export default function SobreMi() {
  return (
    <section id="sobremi" className="py-12 px-6 max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-xl border-l-4 border-blue-500 shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
          <span className="mr-3 text-blue-400">👋</span> Sobre mí
        </h2>
        <p className="text-gray-200 leading-relaxed text-lg">
          Soy estudiante de <span className="text-blue-300 font-semibold">Ingeniería en Sistemas</span> con una fuerte inclinación al
          desarrollo web, la automatización industrial y el diseño arquitectónico.
          Me interesa crear soluciones eficientes que conecten lo <span className="italic text-purple-300">técnico</span> con lo <span className="italic text-cyan-300">estético</span>.
        </p>
      </motion.div>
    </section>
  );
}

