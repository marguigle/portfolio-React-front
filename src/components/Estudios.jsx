
import './estudios.css'
import { useEffect, useState } from "react";
import { fetchData } from "../services/apiService";



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
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div>No hay datos disponibles</div>;
  }





  return (
    
<div className="container shadow-md p-1 mb-1 bg-body rounded">
  <div className=" shadow-lg p-2 mb-4 bg-info rounded aligne-center">
    <h5>ESTUDIOS</h5>
  </div>

  <div className="container">
    <div className="row" id="acordeones">
      <div className="col-1"></div>

      <div className="col-md-10">
        <div className="accordion acordeon-flush" id="accordionExample">
          <div className="accordion-item">
            <h4 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="fal"
                aria-controls="collapseOne"
              >
                ESTUDIOS CURSADOS
              </button>
            </h4>
{
  data.map(estudio =>{
      return( 
          <div key={estudio._id}
                id="collapseOne"
                className="accordion-collapse collapse show "
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                    <div className="accordion-body">
                      <ul className='listaEstudios' >
                        <li >
                          <p className="shadow-sm p-1 mb-1 bg-body-tertiary rounded" >NIVEL: {estudio.tipo }</p>
                          <p className="shadow-sm p-1 mb-1 bg-body-tertiary rounded">TITULO: {estudio.titulo }</p>
                          <p className="shadow-sm p-1 mb-1 bg-body-tertiary rounded">LUGAR: {estudio.lugar }</p>
                          <p className="shadow-sm p-1 mb-1 bg-body-tertiary rounded">FECHA: {estudio.fecha }</p>
                        </li>
                      </ul>
                    </div>
              </div>)
  })
}


          </div>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  </div>

</div>
  )
}

export default Estudios
