import { useState, useCallback, useEffect } from "react";
import { fetchData } from "../services/apiService.js";
import Cargando from "./Cargando";

const Proyectos = () => {
  const [indices, setIndices] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const respuesta = await fetchData(
          "http://localhost:3000/api/proyectos"
        );
        console.log("primer conslog", respuesta);
        setData(respuesta.response);
        setIndices(respuesta.response.map(() => 0)); // Inicializar los índices para cada proyecto
        console.log("segundo conslog", respuesta.response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  console.log("tercer conslog", data);

  const prev = useCallback((projectIndex, imgsLength) => {
    setIndices((prevIndices) =>
      prevIndices.map((indice, index) =>
        index === projectIndex ? (indice - 1 + imgsLength) % imgsLength : indice
      )
    );
  }, []);

  const next = useCallback((projectIndex, imgsLength) => {
    setIndices((prevIndices) =>
      prevIndices.map((indice, index) =>
        index === projectIndex ? (indice + 1) % imgsLength : indice
      )
    );
  }, []);

  useEffect(() => {
    const timers = data.map((proyecto, index) =>
      setInterval(() => {
        next(index, proyecto.imgs.length);
      }, 3000)
    );

    return () => {
      timers.forEach(clearInterval);
    };
  }, [next, data]);

  if (loading) {
    return <Cargando />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center shadow-lg p-4">
      <div className="m-6 text-2xl font-bold">
        <h5>Proyectos</h5>
      </div>

      {data.map((proyecto, projectIndex) => (
        <div key={projectIndex}>
          <p className="text-center">{proyecto.titulo}</p>
          <div className="flex ">
            <button
              onClick={() => prev(projectIndex, proyecto.imgs?.length || 0)}
              className="mr-2"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/proyectos%2Ficons8-gal%C3%B3n-izquierdo-24.png?alt=media&token=a878a7c8-b18e-4409-bfc8-8107303768b3"
                alt="Previous"
              />
            </button>

            <div className="max-w-xl flex justify-center mx-auto mb-5">
              <img
                src={proyecto.imgs ? proyecto.imgs[indices[projectIndex]] : ""}
                alt="Project Screenshot"
                className="border-2 shadow-md"
              />{" "}
            </div>

            <button
              onClick={() => next(projectIndex, proyecto.imgs?.length || 0)}
              className="ml-2"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/proyectos%2Ficons8-chevron-right-24.png?alt=media&token=12d12a6a-0bf5-4ae6-98b7-8b44827e43fa"
                alt="Next"
              />
            </button>
          </div>

          <p className="justify-center text-center w-auto mb-3">
            {proyecto.tecnologias}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Proyectos;
