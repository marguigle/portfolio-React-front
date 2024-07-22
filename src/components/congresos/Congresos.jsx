import { useEffect, useState } from "react";
import { fetchData } from "../../../src/services/apiService";
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
    return (
      <>
        <h2>Cargando...</h2> <Cargando />
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div>No hay datos disponibles</div>;
  }

  return (
    <div className="container ">
      <div className="shadow-lg-300 p-2 mt-5 mb-4 bg-info rounded text-xl  text-center">
        <h5 className="font-bold">CONGRESOS</h5>
      </div>
      <div className="list-group mb-2">
        {data.map((congreso) => (
          <div
            className=" cong list-group-item mb-3 bg-white shadow-4 rounded-lg align-middle text-center"
            key={congreso._id}
          >
            <h5 className="mb-1">{congreso.lugar}</h5>
            <p className="mb-1">{congreso.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Congresos;
