import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/apiService";
import Cargando from "../Cargando";
import "./estudios.css";
import "bootstrap/dist/css/bootstrap.min.css";
import.meta.env.VITE_URL_BASE;
const url = import.meta.env.VITE_URL_BASE;

const Estudios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData(url + "/estudios");
        setData(response.response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

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

  if (data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="card-dark">
          <p className="text-gray-400">No hay datos disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Estudios <span className="gradient-text">&</span> Certificaciones
          </h2>
          <p className="text-gray-400 text-lg">
            Formación académica y certificaciones profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((estudio, index) => (
            <div
              key={estudio._id}
              className="card-glass p-6 group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-violet/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-violet transition-colors">
                    {estudio.titulo}
                  </h5>
                  <p className="text-gray-400 text-sm mb-1">
                    <span className="text-brand-emerald">{estudio.tipo}</span>
                  </p>
                  <p className="text-gray-500 text-sm">{estudio.lugar}</p>
                  <p className="text-gray-500 text-sm mt-2">{estudio.fecha}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Estudios);