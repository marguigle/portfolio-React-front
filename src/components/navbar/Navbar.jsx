import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkMenu = [
    { name: "Inicio", to: "/" },
    { name: "Médico", to: "/medic" },
    { name: "Desarrollador", to: "/developer" },
  ];

  const { theme, toggleTheme } = useTheme();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-dark-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-dark-700 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y nombre */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-violet to-brand-emerald flex items-center justify-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dujyd1cei/image/upload/v1777325697/fotoMia2_bdgkrq.jpg"
                alt="Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <span className="text-gray-900 dark:text-white font-semibold text-xl hidden sm:block">
              Marcelo <span className="text-brand-violet">Iglesia</span>
            </span>
          </div>

          {/* Enlaces de navegación - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {linkMenu.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.to)
                    ? "bg-brand-violet/20 text-brand-violet"
                    : "text-gray-900 dark:text-gray-300 hover:text-brand-violet hover:bg-gray-200 dark:hover:bg-dark-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Iconos sociales y toggle - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {/* Toggle Theme Button */}
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors duration-300 group"
            >
              {/* Luna (oscuro) */}
              <span
                className={`absolute transition-all duration-500 ease-in-out ${
                  theme === "dark"
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-0 -rotate-45"
                }`}
              >
                <svg width="24" height="24" fill="currentColor" className="text-yellow-400">
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
              </span>
              {/* Sol (claro) */}
              <span
                className={`absolute transition-all duration-500 ease-in-out ${
                  theme === "light"
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-0 rotate-45"
                }`}
              >
                <svg width="24" height="24" fill="currentColor" className="text-yellow-500">
                  <circle cx="12" cy="12" r="5" />
                  <g>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
                  </g>
                </svg>
              </span>
            </button>

            {/* GitHub y LinkedIn */}
            <a
              href="https://github.com/marguigle?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-dark-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/marcelo-iglesia-3047b98b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-dark-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-2.277-6.264-6.086-6.264-2.445 0-4.164 1.874-4.164 4.272v4.496h-3v-11h3v1.5c.881-1.368 2.777-2.609 5.664-2.609 3.496 0 6.422 2.313 6.422 7.394v6.215z" />
              </svg>
            </a>
          </div>

          {/* Botón hamburguesa - Mobile */}
          <div className="flex md:hidden items-center gap-3">
            {/* Toggle Theme Button - Mobile */}
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-gray-200 dark:bg-dark-700 transition-colors duration-300"
            >
              <span
                className={`absolute transition-all duration-500 ${
                  theme === "dark"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }`}
              >
                <svg width="20" height="20" fill="currentColor" className="text-yellow-400">
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
              </span>
              <span
                className={`absolute transition-all duration-500 ${
                  theme === "light"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }`}
              >
                <svg width="20" height="20" fill="currentColor" className="text-yellow-500">
                  <circle cx="12" cy="12" r="5" />
                  <g>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
                  </g>
                </svg>
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors"
            >
              {/* Icono hamburguesa / X */}
              <svg
                className={`w-6 h-6 text-gray-900 dark:text-white transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden bg-white/95 dark:bg-dark-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-dark-700`}
      >
        <div className="px-4 py-3 space-y-1">
          {linkMenu.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                isActive(item.to)
                  ? "bg-brand-violet/20 text-brand-violet"
                  : "text-gray-900 dark:text-gray-300 hover:text-brand-violet hover:bg-gray-200 dark:hover:bg-dark-700"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Separador */}
          <div className="border-t border-gray-200 dark:border-dark-700 my-2"></div>

          {/* Enlaces sociales en móvil */}
          <div className="flex gap-3 px-4 py-2">
            <a
              href="https://github.com/marguigle?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-dark-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/marcelo-iglesia-3047b98b/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-dark-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-2.277-6.264-6.086-6.264-2.445 0-4.164 1.874-4.164 4.272v4.496h-3v-11h3v1.5c.881-1.368 2.777-2.609 5.664-2.609 3.496 0 6.422 2.313 6.422 7.394v6.215z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
