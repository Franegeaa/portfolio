import React from 'react';

const habilidades = [
  { categoria: 'Lenguajes', items: [
    { nombre: 'JavaScript', nivel: 4 },
    { nombre: 'Python', nivel: 3 },
    { nombre: 'SQL', nivel: 3 },
    { nombre: 'HTML/CSS', nivel: 4 },
  ]},
  { categoria: 'Frameworks y librerías', items: [
    { nombre: 'React', nivel: 4 },
    { nombre: 'Tailwind CSS', nivel: 2 },
    { nombre: 'Node-RED', nivel: 4 },
    { nombre: 'FastAPI', nivel: 2 },
    { nombre: 'Axios', nivel: 2 },
    { nombre: 'Socket.IO', nivel: 2 },
  ]},
  { categoria: 'Bases de datos', items: [
    { nombre: 'PostgreSQL', nivel: 2 },
    { nombre: 'MySQL', nivel: 2 },
  ]},
  { categoria: 'Herramientas y plataformas', items: [
    { nombre: 'Git / GitHub', nivel: 3 },
    { nombre: 'Vercel', nivel: 2 },
    { nombre: 'Modbus', nivel: 3 },
    { nombre: 'Elipse Power', nivel: 2 },
    { nombre: 'PLC (general)', nivel: 3 },
    { nombre: 'Telegram API / bots', nivel: 4 },
    { nombre: 'Node.js', nivel: 2 },
    { nombre: 'AutoCAD', nivel: 4 },
  ]},
];

function BarraHabilidad({ nivel }) {
  const porcentaje = (nivel / 5) * 100;
  return (
    <div className="w-full bg-gray-200 rounded h-1.5">
      <div
        className="bg-blue-600 h-1.5 rounded"
        style={{ width: `${porcentaje}%` }}
      />
    </div>
  );
}

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-10 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Habilidades</h2>
      <div className="space-y-6">
        {habilidades.map((grupo, idx) => (
          <div key={idx}>
            <h3 className="text-md font-semibold mb-3 text-blue-700">{grupo.categoria}</h3>
            <div className="space-y-3">
              {grupo.items.map((hab, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm text-gray-700 mb-0.5">
                    <span>{hab.nombre}</span>
                    <span className="text-gray-500">{hab.nivel}/5</span>
                  </div>
                  <BarraHabilidad nivel={hab.nivel} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
