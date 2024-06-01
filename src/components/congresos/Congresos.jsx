
import './congresos.css';
import { useEffect, useState } from "react";
import { fetchData } from "../../../src/services/apiService";
import Cargando from '../Cargando';

const Congresos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData('http://localhost:3000/api/congresos');
        console.log(response);
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
    <div className=" container accordion accordion-flush" id="accordionFlushExample">
    <div className="accordion-item shadow-sm p-1 mb-1 bg-body-tertiary rounded">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed btn btn-primary rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Congresos
        </button>
      </h2>
{
      data.map( congreso=>{
        return (
          <>            
             <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <ul key={congreso._id} className='listaEstudios' >
                  <li className="shadow-sm p-1 mb-1  rounded">{congreso.lugar}</li>
                  <li >{congreso.titulo}</li>
                </ul>
                
                </div>
              
             </div>              
          </>
        )
      })
  
}
    </div>
</div>
 


 
  );
};

export default Congresos;
