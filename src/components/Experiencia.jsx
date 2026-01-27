import React from 'react';
import { motion } from 'framer-motion';

const experiencias = [
    {
        empresa: 'Theiler Packaging',
        puesto: 'Desarrollador Full Stack & Automatización',
        periodo: 'Octubre 2025 – Actualidad',
        descripcion: [
            'Lideré el desarrollo de una plataforma web para la planificación de órdenes de trabajo (Python/Streamlit). Reducción de tiempos de planificación de horas a 5 minutos.',
            'Implementé lógica de priorización con Pandas y diseñé un Gantt dinámico que recalcula tiempos en tiempo real.',
            'Automatice la ingesta y limpieza de datos (ETL) desde diversas fuentes asegurando la integridad de la información.'
        ]
    },
    {
        empresa: 'Geding Automatismos y Control',
        puesto: 'Pasante de Desarrollo y Control',
        periodo: 'Mayo 2024 – Septiembre 2025',
        descripcion: [
            'Creé y desplegué un bot para alertas en tiempo real (Node-RED/API Telegram), integrando protocolos industriales (Modbus).',
            'Desarrollé un generador de drivers automatizado utilizando macros complejas en VBA, reduciendo tiempos de configuración.',
            'Diseñé interfaces HMI y SCADA asegurando una UX clara y correcta conexión de señales.',
            'Colaboré en la depuración de lógica en PLCs y revisión de planos eléctricos.'
        ]
    }
];

export default function Experiencia() {
    return (
        <section id="experiencia" className="py-20 px-4 max-w-4xl mx-auto relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-12 text-center text-white"
            >
                Experiencia Laboral
            </motion.h2>

            <div className="relative border-l-2 border-blue-500/30 ml-3 md:ml-6 space-y-12">
                {experiencias.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Dot on timeline */}
                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>

                        <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 shadow-lg">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h3 className="text-2xl font-bold text-white max-w-lg">{exp.puesto}</h3>
                                <span className="text-blue-300 font-mono text-sm bg-blue-900/30 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                                    {exp.periodo}
                                </span>
                            </div>
                            <h4 className="text-xl text-blue-400 mb-4 font-semibold">{exp.empresa}</h4>
                            <ul className="space-y-3">
                                {exp.descripcion.map((item, i) => (
                                    <li key={i} className="text-gray-300 flex items-start">
                                        <span className="mr-2 text-blue-500 mt-1.5 text-xs">●</span>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
