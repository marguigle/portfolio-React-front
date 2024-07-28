const Home = () => {
  return (
    <>
      <div className="  relative bg-[url('https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/Imagen%20de%20paisaje-2.jpg?alt=media&token=c98d9ce4-81f5-4b56-850d-7b07e87a87e0')] bg-cover bg-center from-stone-600 text-white w-screen h-full ">
        <h1 className="text-4xl text-center text-white pt-16 font-bold">
          Bienvenido a mi Pagina web
        </h1>

        <div className="container relative flex flex-col items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/21438e29-719b-45df-ab9b-e61b8e6c3798?alt=media&token=4c5db8b7-7494-4040-88d7-748c1267bb39"
            className="w-52 h-52 object-contain rounded-full m-4"
          />
          <div className="relative w-full max-w-5xl">
            <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
            <div className="relative text-white p-4">
              <div className="mt-4">
                <p>
                  Soy Marcelo Guillermo Iglesia, un médico clínico con más de 35
                  años de experiencia y una pasión renovada por la tecnología. A
                  los 58 años, decidí embarcarme en una nueva aventura: la
                  programación web. Lo que comenzó como un hobby se ha
                  transformado en una poderosa herramienta para combinar mis
                  habilidades médicas con la innovación tecnológica.
                </p>
              </div>
              <h2 className="mb-3 mt-3 text-lg font-bold">Mi Trayectoria</h2>
              <h3 className="mb-2">Medico Clinico:</h3>
              <div className="mb-4">
                <p>
                  Durante mi extensa carrera en medicina, he dedicado mi vida a
                  cuidar y mejorar la salud de mis pacientes. Mi experiencia me
                  ha permitido desarrollar habilidades blandas esenciales como
                  la empatía, la comunicación efectiva y la resolución de
                  problemas complejos, siempre con un enfoque en el bienestar
                  humano.
                </p>
              </div>
              <h3 className="mb-2">Programador Web:</h3>
              <div className="mb-4">
                <p>
                  Desde que inicié mis estudios en programación, he completado
                  numerosos proyectos que combinan mi conocimiento médico con el
                  desarrollo web. Mi sitio web es una ventana a mi currículum
                  médico y a los proyectos que he desarrollado como programador,
                  demostrando mi capacidad para aprender rápidamente y adaptarme
                  a nuevas tecnologías.
                </p>
              </div>
              <h2 className="mb-2">¿Qué Ofrezco?</h2>
              <div className="mb-4">
                <ul>
                  <li>
                    Habilidades de Resolución de Problemas: La medicina me ha
                    enseñado a enfrentar y resolver situaciones complejas con
                    calma y precisión, una habilidad que se traduce
                    perfectamente en el mundo del desarrollo web.
                  </li>
                  <li>
                    Comunicación Efectiva: Mi experiencia tratando con pacientes
                    y colegas me ha dotado de excelentes habilidades de
                    comunicación, esenciales para trabajar en equipo y entender
                    las necesidades del cliente.
                  </li>
                  <li>
                    Adaptabilidad y Aprendizaje Continuo: Aprender a programar a
                    los 58 años es un testimonio de mi capacidad para adaptarme
                    y aprender nuevas habilidades. Estoy comprometido con el
                    crecimiento profesional continuo y la actualización de mis
                    conocimientos tecnológicos.
                  </li>
                  <li>
                    Empatía y Trabajo en Equipo: La empatía desarrollada a lo
                    largo de mi carrera médica me permite comprender mejor las
                    necesidades de los usuarios y trabajar de manera
                    colaborativa en entornos de equipo.
                  </li>
                </ul>
              </div>
              <h2 className="mb-2">Mis Proyectos</h2>
              <div className="mb-4">
                <p>
                  En mi sitio web, encontrarás una selección de mis proyectos de
                  programación, donde he aplicado mi experiencia médica para
                  crear soluciones tecnológicas innovadoras. Desde aplicaciones
                  web interactivas hasta bases de datos eficientes, cada
                  proyecto refleja mi dedicación y pasión por la tecnología.
                </p>
              </div>
              <hr />
              <div className="mt-4 mb-4">
                <p>
                  Te invito a explorar mi página y a conocer más sobre mi
                  trayectoria y mis proyectos. Estoy entusiasmado por las
                  oportunidades que el futuro pueda deparar y ansioso por
                  contribuir con mis habilidades únicas en el mundo del
                  desarrollo web.
                </p>
              </div>
              <p className="font-extrabold mb-6">¡Gracias por tu visita!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
