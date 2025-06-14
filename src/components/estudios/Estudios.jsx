import React, { useEffect, useState } from "react";
import { fetchData } from "../../../src/services/apiService";
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
    return <div>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div>No hay datos disponibles</div>;
  }

  return (
    <div className="container bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/Imagen%20abstracta-2.jpg?alt=media&token=39f82268-e17e-48a2-8c84-51acbf281824)]   ">
      <div className=" bg-info rounded text-xl  text-center  m-1">
        <h5 className="font-bold p-1 ">ESTUDIOS</h5>
      </div>
      <div className="row ">
        {data.map((estudio) => (
          <div className="col-md-4 mb-4" key={estudio._id}>
            <div className="card bg-amber-200 shadow-md max-w-xs transition duration-300 ease-in-out hover:scale-110">
              <div className="card-body">
                <h5 className="card-title text-amber-900">{estudio.titulo}</h5>
                <p className="card-text">Tipo: {estudio.tipo}</p>
                <p className="card-text">Lugar: {estudio.lugar}</p>
                <p className="card-text">Fecha: {estudio.fecha}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Estudios);
