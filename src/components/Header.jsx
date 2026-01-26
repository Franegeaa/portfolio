import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

export default function Header() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 text-center w-full relative z-10"
    >
      <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl inline-block shadow-2xl border border-white/10 mx-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 leading-normal">
          Francisco Egea
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
          Ingeniería en Sistemas <span className="text-blue-400 mx-2">•</span> Desarrollo Web <span className="text-purple-400 mx-2">•</span> Automatización
        </p>

        <div className="mt-8">
          <a
            href="/docs/FrancisocEgeaCV(ESP).pdf"
            download="Francisco_Egea_CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg border border-white/20"
          >
            <FaDownload className="text-lg" />
            Descargar CV
          </a>
        </div>
      </div>
    </motion.section>
  );
}
