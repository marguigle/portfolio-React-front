import { useEffect, useState } from "react";
import { fetchData } from "../../services/apiService";
import Cargando from "../Cargando";
import "bootstrap/dist/css/bootstrap.min.css";
import.meta.env.VITE_URL_BASE;
const url = import.meta.env.VITE_URL_BASE;

const ActDocente = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData(url + "/actdocente");
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
    <div className="container">
      <div className="shadow-lg-300 p-2 mt-5 mb-4 bg-info rounded text-xl  text-center">
        <h5 className="font-bold">ACTIVIDAD DOCENTE</h5>
      </div>
      <div className="row">
        {data.map((actDocente) => (
          <div className="col-md-4 mb-4" key={actDocente._id}>
            <div className="card bg-amber-200 shadow-md max-w-xs transition duration-300 ease-in-out hover:scale-110">
              <div className="card-body">
                <h5 className="card-title">{actDocente.titulo}</h5>
                <p className="card-text">{actDocente.lugar}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActDocente;
