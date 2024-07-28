const SoftSkills = () => {
  const softSk = [
    { id: 1, skill: " trabajo en equipo" },
    { id: 2, skill: "pensamiento crítico" },
    { id: 3, skill: "comunicación" },
    { id: 4, skill: "resolución de conflictos" },
    { id: 5, skill: " empatia" },
    { id: 6, skill: " responsabilidad" },
    { id: 7, skill: "puntualidad" },
    { id: 8, skill: "Colaboración y cooperación" },
  ];
  return (
    <div className=" flex  bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/mountains-8347890_1920.jpg?alt=media&token=db4f74ab-861b-4368-8053-4a0860ef76a1)] bg-cover bg-center h-screen  from-stone-600  justify-center ">
      <div className="text-2xl  mb-5  tems-center justify-center ">
        <h5 className="pt-24 m-2 text-white">Soft skills</h5>
      </div>
      <ul className="w-56 text-white text-center m-4">
        {softSk.map((skill) => (
          <li
            className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 rk:border-opacity-50"
            key={skill.id}
          >
            {skill.skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoftSkills;
