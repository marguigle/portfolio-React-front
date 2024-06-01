import ExpLaboral from '../components/experiencia-laboral/ExpLaboral.jsx';
import Persona from '../components/persona/Persona.jsx';
import Estudios from '../components/estudios/Estudios.jsx';
import ActDocente from '../components/actDocente/ActDocente.jsx';
import Congresos from '../components/congresos/Congresos.jsx';

const Medic = () => {
  return (
    <>
      <Persona />
      <Estudios />
      <Congresos />
      <ActDocente />
      <ExpLaboral />
    </>
  );
}

export default Medic