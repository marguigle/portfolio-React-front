const SoftSkills = () => {
  const softSk = [
    { id: 1, skill: "Trabajo en Equipo" },
    { id: 2, skill: "Pensamiento Crítico" },
    { id: 3, skill: "Comunicación Efectiva" },
    { id: 4, skill: "Resolución de Conflictos" },
    { id: 5, skill: "Empatía" },
    { id: 6, skill: "Responsabilidad" },
    { id: 7, skill: "Puntualidad" },
    { id: 8, skill: "Colaboración" },
  ];

  return (
    <div className="min-h-screen gradient-hero pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Soft <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Habilidades blandas desarrolladas a lo largo de mi carrera profesional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {softSk.map((skill, index) => (
            <div
              key={skill.id}
              className="card-glass p-5 flex items-center gap-4 group hover:translate-x-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-3 h-3 rounded-full bg-brand-violet group-hover:bg-brand-emerald transition-colors"></div>
              <span className="text-gray-200 font-medium text-lg">
                {skill.skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;