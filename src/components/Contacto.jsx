import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Reemplazá estas constantes con tus credenciales de EmailJS (emailjs.com)
// 1. Creá una cuenta en emailjs.com
// 2. Añadí un servicio de email (Gmail, etc.) → obtenés SERVICE_ID
// 3. Creá un template con las variables {{from_name}}, {{from_email}}, {{message}} → obtenés TEMPLATE_ID
// 4. En Account → API Keys → obtenés PUBLIC_KEY
const EMAILJS_SERVICE_ID = 'TU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'TU_PUBLIC_KEY';

export default function Contacto() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ from_name: '', from_email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-gray-800/60 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all';

  return (
    <section id="contacto" className="py-20 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-800"
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-white">Contacto</h2>
        <p className="text-center text-gray-300 mb-8 text-lg">
          ¿Querés trabajar conmigo o charlar sobre un proyecto?{' '}
          <span className="text-blue-400 font-semibold">¡Escribime!</span>
        </p>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-8 text-center"
          >
            <FaCheckCircle className="text-green-400 text-5xl" />
            <p className="text-white text-xl font-semibold">¡Mensaje enviado!</p>
            <p className="text-gray-400">Te respondo a la brevedad.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-2 text-blue-400 hover:underline text-sm"
            >
              Enviar otro mensaje
            </button>
          </motion.div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Nombre</label>
                <input
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Mensaje</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Contame de qué se trata..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">
                Hubo un error al enviar. Intentá de nuevo o escribime directo al email.
              </p>
            )}

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <FaPaperPlane />
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </motion.button>
          </form>
        )}

        {/* Links sociales */}
        <div className="flex justify-center gap-8 text-3xl mt-8 pt-6 border-t border-gray-800">
          <motion.a
            whileHover={{ y: -4 }}
            href="mailto:egeafran02@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            title="Email"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            whileHover={{ y: -4 }}
            href="https://github.com/Franegeaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            title="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ y: -4 }}
            href="https://www.linkedin.com/in/franciscoegeaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
