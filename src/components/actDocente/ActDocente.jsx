// import { useEffect, useState } from "react";
// import { fetchData } from "../../../src/services/apiService";
// import Cargando from "../Cargando";

// const ActDocente = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDataFromApi = async () => {
//       try {
//         const response = await fetchData(
//           "http://localhost:3000/api/actdocente"
//         );

//         setData(response); // Accede al array dentro de response
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDataFromApi();
//   }, []);

//   if (loading) {
//     return <Cargando />;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (data.length === 0) {
//     return <div>No hay datos disponibles</div>;
//   }

//   return (
//     <div>
//       <div>
//         <h2>
//           <button>Actividad Docente</button>
//         </h2>
//         {data.map((actDocente) => {
//           return (
//             <div key={actDocente._id}>
//               <div className="accordion-body">
//                 <ul className="listaEstudios">
//                   <li className="shadow-sm p-1 mb-1  rounded ">
//                     {actDocente.titulo}
//                   </li>
//                   <li>{actDocente.lugar}</li>
//                 </ul>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ActDocente;
import { useEffect, useState } from "react";
import { fetchData } from "../../../src/services/apiService";
import Cargando from "../Cargando";
import "bootstrap/dist/css/bootstrap.min.css";

const ActDocente = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData(
          "http://localhost:3000/api/actdocente"
        );
        setData(response);
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
        <h5>ACTIVIDAD DOCENTE</h5>
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
