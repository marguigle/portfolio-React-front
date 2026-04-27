import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/apiService";
import Cargando from "../Cargando";
import "./expLaboral.css";
import.meta.env.VITE_URL_BASE;
const url = import.meta.env.VITE_URL_BASE;

const ExpLaboral = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData(url + "/explaboral");
        console.log(response);
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experiencia <span className="gradient-text">Laboral</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Mi trayectoria profesional en el ámbito médico
          </p>
        </div>

        <div className="space-y-6">
          {data.map((experiencia, index) => (
            <div
              key={experiencia._id}
              className="card-glass p-6 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-brand-violet/50 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-dark-700 flex items-center justify-center overflow-hidden">
                <img
                  src={experiencia.logos}
                  alt="logo experiencia"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {experiencia.cargo}
                </h3>
                <p className="text-brand-violet mb-1">{experiencia.lugar}</p>
                <p className="text-gray-400 text-sm">{experiencia.fecha}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-brand-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ExpLaboral);