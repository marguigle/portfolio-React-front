
import './App.css'
import ExpLaboral from './components/ExpLaboral.jsx'
import  Navbar  from './components/Navbar.jsx'
import Persona from './components/Persona.jsx'
import Estudios from './components/Estudios.jsx'
import ActDocente from './components/ActDocente.jsx'
import Congresos from './components/Congresos.jsx'
import './App.css'
// import CargaImagenes from './components/CargaImagenes.jsx'
function App() {
 

  return (
    <>
          <div className='container'>
              <Navbar />
              {/* <CargaImagenes /> */}
              <Persona />
              <Estudios />
              <ActDocente />
              <Congresos />
              <ExpLaboral />
          </div>
    </>
  )
}

export default App
