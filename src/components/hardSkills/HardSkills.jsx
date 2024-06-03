// import { ProgressBar } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import { fetchData } from "../../../src/services/apiService";
// import Cargando from "../Cargando";

// const HardSkills = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchDataFromApi = async () => {
//       try {
//         const response = await fetchData(
//           "http://localhost:3000/api/hardskills"
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
//     <div className="container flex max-w-fit">
//       <h4>Hard Skills</h4>

//       {data.map((hardSkill) => {
//         let now = hardSkill.porcentaje;
//         console.log(now);
//         return (
//           <div
//             className="container  flex items-center gap-2 "
//             key={hardSkill._id}
//           >
//             <div className=" bg-warning-200 flex-wrap gap-1 rounded-md">
//               <div>
//                 <img className="max-w-12 m-2" src={hardSkill.skill} alt="" />
//               </div>
//               <ProgressBar
//                 now={hardSkill.porcentaje}
//                 label={`${hardSkill.porcentaje}%`}
//                 className="w-48 m-4  "
//               />
//               <h6 className=" m-2">{hardSkill.nivel}</h6>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default HardSkills;

import { ProgressBar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchData } from "../../../src/services/apiService";
import Cargando from "../Cargando";

const HardSkills = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData(
          "http://localhost:3000/api/hardskills"
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
    <div className="container mx-auto p-4">
      <h4 className="text-center mb-4 text-2xl font-bold">Hard Skills</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((hardSkill) => {
          return (
            <div
              className="bg-warning-200 rounded-md p-4 flex flex-col items-center shadow-md"
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
