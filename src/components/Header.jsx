import React from 'react';
import { motion } from 'framer-motion';

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
      </div>
    </motion.section>
  );
}
