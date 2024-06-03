import { useState, useCallback, useEffect } from "react";

const Proyectos = () => {
  const [indice, setIndice] = useState(0);

  const imagenesUrlAe = [
    {
      id: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/proyectos%2FCaptura%20de%20pantalla%202024-04-29%20155848.png?alt=media&token=6049d1f3-73cb-4665-81ed-00c8d173c7dc",
    },
    {
      id: 2,
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/proyectos%2FCaptura%20de%20pantalla%202024-04-29%20155946.png?alt=media&token=94b36751-24e3-424d-bde7-8150bd9b612a",
    },
    {
      id: 3,
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/proyectos%2FCaptura%20de%20pantalla%202024-04-29%20160012.png?alt=media&token=638da3c6-8d64-41bc-a36e-c688cd56af80",
    },
    {
      id: 4,
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/proyectos%2FCaptura%20de%20pantalla%202024-04-29%20160032.png?alt=media&token=700adfca-d8e9-465e-86fe-ba3a33030501",
    },
    {
      id: 5,
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/proyectos%2FCaptura%20de%20pantalla%202024-04-29%20160056.png?alt=media&token=f1606dfa-a723-4aeb-b781-625ebdb5a1e2",
    },
  ];

  const prev = () => {
    setIndice((indice - 1 + imagenesUrlAe.length) % imagenesUrlAe.length);
  };

  const next = useCallback(() => {
    setIndice((indice + 1) % imagenesUrlAe.length);
  }, [indice]);

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [next]);

  return (
    <div className="flex flex-col items-center">
      <div className="m-6 text-2xl font-bold">
        <h5>proyectos</h5>
      </div>
      <p>Provecto con vanilla html css js llamada a Api Rest</p>
      <div className="flex ">
        <button onClick={prev} className="mr-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/proyectos%2Ficons8-gal%C3%B3n-izquierdo-24.png?alt=media&token=a878a7c8-b18e-4409-bfc8-8107303768b3"
            alt=""
          />
        </button>

        <div className="max-w-xl flex justify-center mx-auto mb-5">
          <img
            src={imagenesUrlAe[indice].img}
            alt="Project Screenshot"
            className="border-2 shadow-md"
          />{" "}
        </div>

        <button onClick={next} className="ml-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/proyectos%2Ficons8-chevron-right-24.png?alt=media&token=12d12a6a-0bf5-4ae6-98b7-8b44827e43fa"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Proyectos;
