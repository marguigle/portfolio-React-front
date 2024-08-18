import { ProgressBar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchData } from "../../../src/services/apiService";
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
        console.log("hardskill " + respuesta);
        setData(respuesta.response);
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
    <div className=" mx-auto p-4 bg-[url('https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/fir-tree-7716263_1920.jpg?alt=media&token=8cf290d1-3288-4a6d-a6fb-2718697e9e81')] bg-cover bg-center  from-stone-600 ">
      <h4 className="text-center m-6 font-bold  text-4xl text-white text-shadow">
        Hard Skills
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
        {data.map((hardSkill) => {
          return (
            <div
              className="bg-warning-200 rounded-md p-4 flex flex-col items-center shadow-md habilidad"
              key={hardSkill._id}
            >
              <img className="w-12 h-12 mb-2" src={hardSkill.skill} alt="" />
              <ProgressBar
                now={hardSkill.porcentaje}
                label={`${hardSkill.porcentaje}%`}
                className="w-full mb-2"
              />
              <h6>{hardSkill.nivel}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HardSkills;
