import { useEffect, useState } from "react";
import { fetchData } from "../../services/apiService";
import "./persona.css";
const Persona = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const persona = await fetchData("http://localhost:3000/api/persona");
        setData(persona); // Accede al array dentro de response
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div>No hay datos disponibles</div>;
  }

  return (
    <div>
      {data.map((persona) => (
        <div key={persona._id}>
          <div className="container container-banner">
            <div className="row align-items-center shadow-lg p-3 mb-5 rounded">
              <div className="col aligm-item-center">
                <img src={persona.imgUrl} alt="" className="miFoto" />
              </div>

              <div className="col-8 ">
                <h1 className="text-white text-3xl">
                  {persona.nombres} {persona.apellidos}
                </h1>

                <h3 className="text-slate-100 text-3xl">{persona.titulo1}</h3>

                <h3 className=" text-slate-200 text-3xl">{persona.titulo2}</h3>
              </div>
            </div>
          </div>

          <div className="container container-datos">
            <div className="row justify-content-around">
              <div className=" col-8">
                <h4 className="text-2xl font-bold">Acerca de mi:</h4>

                <p>{persona.acercaDe}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Persona;
