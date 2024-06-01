
import './estudios.css'
import { useEffect, useState } from "react";
import { fetchData } from "../../../src/services/apiService";
import Cargando from '../Cargando';


const Estudios = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData('http://localhost:3000/api/estudios');
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

    <div className=" container accordion accordion-flush" id="accordionFlushExample">
             <div className="accordion-item shadow-sm p-1 mb-1 bg-body-tertiary rounded">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed  btn btn-primary rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                     Estudios
                    </button>
                  </h2>
                                {
                          data.map( estudio=>{
                            return (
                                   
                                <div id="flush-collapseOne" 
                                className="accordion-collapse collapse" 
                                data-bs-parent="#accordionFlushExample"
                                key={estudio._id}>
                                  <div className="accordion-body">
                                      <ul  className='listaEstudios' >
                                        <li className="shadow-sm p-1 mb-1  rounded">{estudio.tipo }</li>
                                        <li>{estudio.titulo}</li>
                                        <li>{estudio.lugar}</li>
                                        <li>{estudio.fecha}</li>
                                      </ul>
                                    </div>
                                </div>              
                            
                            )
                          })
                      
}
         </div>
</div>
 )
}

export default Estudios
