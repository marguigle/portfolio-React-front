import { useContext, useEffect } from "react";

import "./persona.css";
import { FetchContextPersona } from "../../contexts/fetchContextPersona";
import.meta.env.VITE_URL_BASE;
// const url = import.meta.env.VITE_URL_BASE;

const Persona = () => {
  const { fetchDataFromApi, loading, error, data } =
    useContext(FetchContextPersona);

  useEffect(() => {
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
              <div>
                <h4 className="text-2xl font-bold acercade">Acerca de mi:</h4>

                <p className="acercade ">{persona.acercaDe}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Persona;
