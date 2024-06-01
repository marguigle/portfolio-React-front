
import { useEffect, useState } from "react";
import { fetchData } from "../../services/apiService";
import Cargando from "../Cargando";
import './expLaboral.css'





const ExpLaboral = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData('http://localhost:3000/api/explaboral');
        console.log(response)
        setData(response); // Accede al array dentro de response
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
    <>
      <div className="container shadow-lg p-1 mb-1 mr-2 ml-2 bg-body rounded">
        
          <div className="shadow-lg p-2 mb-4 bg-info rounded">
            <h5>EXPERIENCIA LABORAL</h5>
        
        </div>
  <div >
  {data.map((experiencia) => (
          <div key={experiencia._id }className="container cont-exp"> 
           <img src={experiencia.logos} alt="foto de la experiencia laboral" className="fotoExpLab"/>  
            <p>{experiencia.cargo}  {experiencia.lugar}  {experiencia.fecha}</p>
            
          </div>
        ))}

  </div>

      </div>
    </>
  );
  
}

export default ExpLaboral
