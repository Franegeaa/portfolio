import React from 'react';
import { motion } from 'framer-motion';

export default function Formacion() {
    return (
        <section id="formacion" className="py-12 px-4 max-w-4xl mx-auto relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-12 text-center text-white"
            >
                Formación Académica
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
                >
                    <div>
                        <div className="text-4xl mb-4">🎓</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Ingeniería en Sistemas de Información</h3>
                        <p className="text-purple-300 text-lg mb-4">UTN – FRC</p>
                    </div>
                    <div className="mt-4">
                        <span className="inline-block bg-purple-900/30 text-purple-200 px-4 py-1.5 rounded-full font-mono text-sm border border-purple-500/30">
                            2021 – Actualidad (Cursando 5° año)
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
                >
                    <div>
                        <div className="text-4xl mb-4">🌍</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Inglés</h3>
                        <p className="text-green-300 text-lg mb-4">Nivel Intermedio</p>
                    </div>
                    <div className="mt-4">
                        <span className="inline-block bg-green-900/30 text-green-200 px-4 py-1.5 rounded-full font-bold text-lg border border-green-500/30">
                            B2
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
