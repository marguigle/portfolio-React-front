
import './App.css'
import ExpLaboral from './components/ExpLaboral.jsx'
import  Navbar  from './components/Navbar.jsx'
import Persona from './components/Persona.jsx'
import Estudios from './components/Estudios.jsx'
import ActDocente from './components/ActDocente.jsx'
import Congresos from './components/Congresos.jsx'
import Footer from './components/Footer.jsx'
// import CargaImagenes from './components/CargaImagenes.jsx'
function App() {
 

  return (
    <>
          <div className='container'>
              <Navbar />
              {/* <CargaImagenes /> */}
          
              <Persona />
              <Estudios />
              <Congresos />
              <ActDocente />         
              <ExpLaboral />
             < Footer />
          </div>
    </>
  )
}

export default App
