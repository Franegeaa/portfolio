import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import SobreMi from './components/SobreMii.jsx';
import Experiencia from './components/Experiencia.jsx';
import Formacion from './components/Formacion.jsx';
import Proyectos from './components/Proyectos.jsx';
import Habilidades from './components/Habilidades.jsx';
import Contacto from './components/Contacto.jsx';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <main className="min-h-screen font-sans relative overflow-hidden selection:bg-cyan-500 selection:text-white">
      {/* Fondo */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center')",
          }}
        />
        <div
          className={`absolute inset-0 backdrop-blur-[2px] transition-all duration-700 ${
            isDark
              ? 'bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90'
              : 'bg-gradient-to-br from-slate-100/88 via-white/78 to-slate-100/88'
          }`}
        />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      {/* Contenido */}
      <div className={`relative z-10 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
        <Navbar />
        <Header />
        <SobreMi />
        <Experiencia />
        <Formacion />
        <Proyectos />
        <Habilidades />
        <Contacto />
      </div>
    </main>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
