import { useState, useEffect } from "react";
import "./persona.css";
import { getData } from "../../services/apiService";

const Persona = ({ rol = "medico" }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await getData(`/persona?rol=${rol}`);
        setData(Array.isArray(res.response) ? res.response : []);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [rol]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-violet"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="card-dark text-center">
          <p className="text-red-400">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="card-dark text-center">
          <p className="text-gray-400">No hay datos disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {data.map((persona) => (
          <div key={persona._id}>
            <div className="card-glass p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  {persona.imgUrl ? (
                    <img
                      src={persona.imgUrl}
                      alt={persona.nombres}
                      className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-brand-violet glow-violet"
                    />
                  ) : (
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-brand-violet glow-violet flex items-center justify-center bg-dark-700">
                      <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="text-center md:text-left flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {persona.nombres} {persona.apellidos}
                  </h1>
                  <h3 className="text-xl md:text-2xl text-brand-violet mb-2">
                    {persona.titulo1}
                  </h3>
                </div>
              </div>
            </div>

            <div className="card-glass p-8">
              <h4 className="text-2xl font-bold text-white mb-4">
                Acerca de mí
              </h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                {persona.acercaDe}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Persona;
