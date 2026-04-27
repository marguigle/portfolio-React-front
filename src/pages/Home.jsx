const Home = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-violet/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-emerald/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-700/50 border border-dark-600 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
              <span className="text-gray-300 text-sm">Disponible para nuevas oportunidades</span>
            </div>
          </div>

          <h1 className="animate-slide-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hola, soy{' '}
            <span className="gradient-text">Marcelo Iglesia</span>
          </h1>

          <p className="animate-slide-up-delay-2 text-xl sm:text-2xl text-gray-300 mb-4">
           Médico Clínico + Desarrollador Web Full Stack
          </p>

          <p className="animate-slide-up-delay-3 text-gray-400 text-lg max-w-3xl mx-auto mb-10">
            Con más de 35 años de experiencia en medicina y una pasión renovada por la tecnología.
            Combino mis habilidades blandas desarrolladas en el ámbito médico con las capacidades técnicas del desarrollo web moderno.
          </p>

          <div className="animate-slide-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/medic" className="btn-primary">
              Ver Currículum Médico
            </a>
            <a href="/developer" className="btn-secondary">
              Proyectos de Desarrollo
            </a>
          </div>

          <div className="animate-slide-up-delay-3 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card-dark text-center">
              <div className="text-3xl font-bold gradient-text">35+</div>
              <div className="text-gray-400 text-sm mt-1">Años de Experiencia</div>
            </div>
            <div className="card-dark text-center">
              <div className="text-3xl font-bold text-brand-violet">10+</div>
              <div className="text-gray-400 text-sm mt-1">Proyectos Web</div>
            </div>
            <div className="card-dark text-center">
              <div className="text-3xl font-bold text-brand-emerald">100%</div>
              <div className="text-gray-400 text-sm mt-1">Compromiso</div>
            </div>
            <div className="card-dark text-center">
              <div className="text-3xl font-bold text-brand-blue">∞</div>
              <div className="text-gray-400 text-sm mt-1">Aprendizaje Continuo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;