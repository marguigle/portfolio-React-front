import { ProgressBar } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/apiService";
import Cargando from "../Cargando";
import "./hardSkills.css";
import.meta.env.VITE_URL_BASE;
const url = import.meta.env.VITE_URL_BASE;

const HardSkills = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const respuesta = await fetchData(url + "/hardskills");
        console.log("hardskill response:", respuesta);
        setData(Array.isArray(respuesta.response) ? respuesta.response : []);
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
    return <div className="min-h-screen flex items-center justify-center"><div className="card-dark"><p className="text-red-400">Error: {error}</p></div></div>;
  }

  if (data.length === 0) {
    return <div className="min-h-screen flex items-center justify-center"><div className="card-dark"><p className="text-gray-400">No hay datos disponibles</p></div></div>;
  }

  return (
    <div className="min-h-screen gradient-hero pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Hard <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones web modernas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((hardSkill, index) => (
            <div
              key={hardSkill._id}
              className="card-glass p-6 group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-xl bg-dark-700 group-hover:bg-brand-violet/20 transition-colors">
                  <img
                    className="w-12 h-12 object-contain"
                    src={hardSkill.skill}
                    alt=""
                  />
                </div>
                <h6 className="text-white font-semibold text-lg mb-3">
                  {hardSkill.nivel}
                </h6>
                <div className="w-full">
                  <ProgressBar
                    now={hardSkill.porcentaje}
                    label={`${hardSkill.porcentaje}%`}
                    className="h-2 bg-dark-600 rounded-full overflow-hidden"
                    variant="custom"
                    style={{
                      background: '#1a1a25',
                    }}
                  />
                  <style>{`
                    .progress-bar {
                      background: linear-gradient(90deg, #7c3aed, #10b981);
                    }
                  `}</style>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(HardSkills);