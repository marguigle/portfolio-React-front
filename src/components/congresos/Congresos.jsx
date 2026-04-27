import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/apiService";
import Cargando from "../Cargando";
import "./congresos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import.meta.env.VITE_URL_BASE;
const url = import.meta.env.VITE_URL_BASE;

const Congresos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData(url + "/congresos");
        console.log("Congresos response:", response);
        setData(Array.isArray(response.response) ? response.response : []);
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Congresos <span className="gradient-text">&</span> Conferencias
          </h2>
          <p className="text-gray-400 text-lg">
            Eventos y participaciónes profesionales
          </p>
        </div>

        <div className="space-y-4">
          {data.map((congreso, index) => (
            <div
              key={congreso._id}
              className="card-glass p-6 flex items-center gap-6 group hover:translate-x-2 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-emerald/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h5 className="text-white font-semibold text-lg mb-1 group-hover:text-brand-emerald transition-colors">
                  {congreso.titulo}
                </h5>
                <p className="text-gray-400 text-sm">{congreso.lugar}</p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m0 12h.01M12 21h7a2 2 0 002-2V7a2 2 0 00-2-2h-7v0a2 2 0 00-2 2v6a2 2 0 002 2zM8 21h8" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Congresos);