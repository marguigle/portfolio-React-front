const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-dark-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-violet to-brand-emerald flex items-center justify-center">
              <span className="text-white font-bold text-sm">MI</span>
            </div>
            <span className="text-gray-400 text-sm">
              © {currentYear} Marcelo Iglesia. Todos los derechos reservados.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/marguigle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-violet transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/marcelo-iglesia-3047b98b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-violet transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Hecho con</span>
            <span className="text-brand-emerald">♥</span>
            <span>y</span>
            <span className="text-brand-violet">React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;