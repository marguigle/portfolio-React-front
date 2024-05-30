import './actDocente.css'
import { useEffect, useState } from "react";
import { fetchData } from "../services/apiService";



const ActDocente = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(()=>{
  const fetchDataFromApi = async () => {
    try {
      const response = await fetchData('http://localhost:3000/api/actdocente');
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
    <div className="container-estudios shadow-lg p-2 mb-4 bg-info rounded">
      <h5>ACTIVIDAD DOCENTE</h5>
    </div>
  
    <div className="container">
      <div className="row" id="acordeones">
        <div className="col-1"></div>
  
        <div className="col-md-10">
          <div className="accordion acordeon-flush" id="accordionExample">
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
               />
                  ACTIIVIDAD DOCENTE
                  </h4>

                  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>


</div>
{
  data.map(actDocente=>{

    return(

      <div key={actDocente._id}
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body nada">
        <ul className="listaEstudios">
          <li>
            <p className="shadow-sm p-1 mb-1 bg-body-tertiary rounded">{actDocente.titulo} </p>
            <p className="shadow-sm p-1 mb-1 bg-body-tertiary rounded"> {actDocente.lugar} </p>
          
          </li>
        </ul>
      </div>
    </div>

    )
  })
}



            </div>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="col-1"></div> 
      </div>
    </div>
  </div>
  
  )
}

export default ActDocente



