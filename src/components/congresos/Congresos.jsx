// import { useEffect, useState } from "react";
// import { fetchData } from "../../../src/services/apiService";
// import Cargando from "../Cargando";

// const Congresos = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDataFromApi = async () => {
//       try {
//         const response = await fetchData("http://localhost:3000/api/congresos");
//         console.log(response);
//         setData(response);
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
//           <button
//             className="accordion-button collapsed btn btn-primary rounded"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#flush-collapseOne"
//             aria-expanded="false"
//             aria-controls="flush-collapseOne"
//           >
//             Congresos
//           </button>
//         </h2>
//         {data.map((congreso) => {
//           return (
//             <div key={congreso._id}>
//               <div className="accordion-body">
//                 <ul className="listaEstudios">
//                   <li className="shadow-sm p-1 mb-1  rounded">
//                     {congreso.lugar}
//                   </li>
//                   <li>{congreso.titulo}</li>
//                 </ul>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Congresos;
// import { useEffect, useState } from "react";
// import { fetchData } from "../../../src/services/apiService";
// import Cargando from "../Cargando";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Congresos = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDataFromApi = async () => {
//       try {
//         const response = await fetchData("http://localhost:3000/api/congresos");
//         setData(response);
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
//     <div className="container">
//       <h2 className="my-4">Congresos</h2>
//       <div className="row">
//         {data.map((congreso) => (
//           <div className="col-md-4 mb-4" key={congreso._id}>
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{congreso.titulo}</h5>
//                 <p className="card-text">{congreso.lugar}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Congresos;
import { useEffect, useState } from "react";
import { fetchData } from "../../../src/services/apiService";
import Cargando from "../Cargando";
import "bootstrap/dist/css/bootstrap.min.css";

const Congresos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData("http://localhost:3000/api/congresos");
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
        <h5>CONGRESOS</h5>
      </div>
      <div className="list-group mb-2">
        {data.map((congreso) => (
          <div className="list-group-item mb-1" key={congreso._id}>
            <h5 className="mb-1">{congreso.titulo}</h5>
            <p className="mb-1">{congreso.lugar}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Congresos;
