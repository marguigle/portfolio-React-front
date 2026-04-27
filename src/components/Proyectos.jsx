import { useState, useCallback, useEffect } from "react";
import { fetchData } from "../services/apiService.js";
import Cargando from "./Cargando";
import.meta.env.VITE_URL_BASE;
const url = import.meta.env.VITE_URL_BASE;

const Proyectos = () => {
  const [indices, setIndices] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const respuesta = await fetchData(url + "/proyectos");
        console.log("Proyectos response:", respuesta);
        const proyectosArray = Array.isArray(respuesta.response) ? respuesta.response : [];
        setData(proyectosArray);
        setIndices(proyectosArray.map(() => 0));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  const prev = useCallback((projectIndex, imgsLength) => {
    setIndices((prevIndices) =>
      prevIndices.map((indice, index) =>
        index === projectIndex ? (indice - 1 + imgsLength) % imgsLength : indice
      )
    );
  }, []);

  const next = useCallback((projectIndex, imgsLength) => {
    setIndices((prevIndices) =>
      prevIndices.map((indice, index) =>
        index === projectIndex ? (indice + 1) % imgsLength : indice
      )
    );
  }, []);

  useEffect(() => {
    const timers = data.map((proyecto, index) =>
      setInterval(() => {
        next(index, proyecto.imgs.length);
      }, 3000)
    );

    return () => {
      timers.forEach(clearInterval);
    };
  }, [next, data]);

  if (loading) {
    return <Cargando />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="card-dark">
          <p className="text-red-400">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Algunos de los proyectos web que he desarrollado
          </p>
        </div>

        <div className="space-y-16">
          {data.map((proyecto, projectIndex) => (
            <div key={projectIndex} className="card-glass p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {proyecto.titulo}
                </h3>
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => prev(projectIndex, proyecto.imgs?.length || 0)}
                    className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center hover:bg-brand-violet transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="w-full max-w-lg h-64 overflow-hidden rounded-xl">
                    <img
                      src={proyecto.imgs ? proyecto.imgs[indices[projectIndex]] : ""}
                      alt="Project Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <button
                    onClick={() => next(projectIndex, proyecto.imgs?.length || 0)}
                    className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center hover:bg-brand-violet transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-gray-300 text-lg">
                  {proyecto.tecnologias}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;