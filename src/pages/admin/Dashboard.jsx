import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../services/apiService";

const statsCards = [
  { label: "Persona", endpoint: "/persona", icon: "person", color: "violet" },
  { label: "Estudios", endpoint: "/estudios", icon: "school", color: "emerald" },
  { label: "Experiencia", endpoint: "/explaboral", icon: "work", color: "blue" },
  { label: "Act. Docente", endpoint: "/actdocente", icon: "teaching", color: "yellow" },
  { label: "Congresos", endpoint: "/congresos", icon: "event", color: "pink" },
  { label: "Hard Skills", endpoint: "/hardskills", icon: "skills", color: "purple" },
  { label: "Proyectos", endpoint: "/proyectos", icon: "folder", color: "cyan" },
];

const icons = {
  person: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  school: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  work: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  teaching: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  event: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  skills: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  folder: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  ),
};

const colorMap = {
  violet: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
};

export default function Dashboard() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const results = await Promise.all(
        statsCards.map(async (card) => {
          const data = await getData(card.endpoint);
          return { [card.endpoint]: Array.isArray(data) ? data.length : data ? 1 : 0 };
        })
      );
      setStats(Object.assign({}, ...results));
    } catch (err) {
      console.error("Error loading stats:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Gestiona el contenido de tu portfolio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {statsCards.map((card) => (
          <Link
            key={card.endpoint}
            to={`/admin${card.endpoint}`}
            className={`card-dark p-6 border ${colorMap[card.color]} hover:scale-105 transition-transform`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${colorMap[card.color]}`}>{icons[card.icon]}</div>
              <span className="text-3xl font-bold text-white">
                {loading ? "-" : stats[card.endpoint] || 0}
              </span>
            </div>
            <h3 className="font-semibold text-white">{card.label}</h3>
            <p className="text-sm text-gray-400 mt-1">Click para gestionar</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 card-dark p-6">
        <h2 className="text-xl font-bold text-white mb-4">Acciones rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/admin/persona"
            className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <div className="p-2 bg-brand-violet/20 rounded-lg text-brand-violet">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-white">Editar Persona</p>
              <p className="text-sm text-gray-400">Datos personales y foto</p>
            </div>
          </Link>

          <a
            href="/"
            target="_blank"
            className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <div className="p-2 bg-brand-emerald/20 rounded-lg text-brand-emerald">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-white">Ver Portfolio</p>
              <p className="text-sm text-gray-400">Abrir en nueva pestaña</p>
            </div>
          </a>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-left"
          >
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-white">Actualizar Stats</p>
              <p className="text-sm text-gray-400">Refrescar datos</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}