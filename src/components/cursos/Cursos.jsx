import { useState, useEffect } from "react";
import { fetchData } from "../../services/apiService.js";
import Cargando from "../Cargando";
import.meta.env.VITE_URL_BASE;
const url = import.meta.env.VITE_URL_BASE;

const Cursos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const respuesta = await fetchData(url + "/cursos");
        const cursosArray = Array.isArray(respuesta.response) ? respuesta.response : [];
        setData(cursosArray);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);

  if (loading) return <Cargando />;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="card-dark">
          <p className="text-red-400">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (data.length === 0) return null;

  return (
    <div className="min-h-screen gradient-hero py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Cursos de <span className="gradient-text">Programación</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Formación continua en desarrollo de software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((curso) => (
            <div key={curso._id} className="card-glass p-6 flex flex-col">
              {curso.imgUrl && (
                <div className="w-full h-44 overflow-hidden rounded-xl mb-4">
                  <img
                    src={curso.imgUrl}
                    alt={curso.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{curso.nombre}</h3>
              <div className="mt-auto space-y-2">
                {curso.tecnologia && (
                  <div className="flex items-center gap-2 text-sm text-brand-violet">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    {curso.tecnologia}
                  </div>
                )}
                {curso.lugar && (
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {curso.lugar}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cursos;
