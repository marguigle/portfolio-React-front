import { Link } from "react-router-dom";
const Navbar = () => {
  const linkMenu = [
    {
      name: "home",
      to: "/",
    },
    {
      name: "Currículum Médico",
      to: "/medic",
    },

    {
      name: "Dearrollador web Full Stack",
      to: "/developer",
    },
  ];

  return (
    <nav
      className="  flex min-w-screen flex-wrap  items-center justify-between 
     bg-slate-600 py-2 shadow-dark-strong dark:bg-neutral-700 lg:py-4 "
    >
      <div className="relative flex items-end">
        <ul>
          <button
            type="button"
            className="inline-block rounded bg-cian-500 y px-6 pb-2 pt-2.5 m-2
             font-medium uppercase leading-normal text-white text-sm shadow-primary-3 
             transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 
             focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 
             motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            <li className="transition duration-300 ease-in-out hover:scale-110">
              <Link
                to={linkMenu[0].to}
                className="nav-link "
                aria-current="page"
              >
                Home
              </Link>
            </li>
          </button>
          <button
            type="button"
            className="inline-block rounded bg-cian-500 y px-6 pb-2 pt-2.5  font-medium uppercase leading-normal text-white text-sm
            shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            <li className="transition duration-300 ease-in-out hover:scale-110">
              <Link to={linkMenu[1].to} className="nav-link ">
                Currículum Médico
              </Link>
            </li>
          </button>
          <button
            type="button"
            className="inline-block rounded bg-cian-500 y px-6 pb-2 pt-2.5  font-medium uppercase leading-normal text-white text-sm
            shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-cian-800 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            <li className="transition duration-300 ease-in-out hover:scale-110">
              <Link to={linkMenu[2].to} className="nav-link">
                {" "}
                Dearrollador web Full Stack
              </Link>
            </li>
          </button>
        </ul>
      </div>
      <div className="flex">
        <a href="https://github.com/marguigle?tab=repositories" target="_blank">
          <img
            src="logotipo-de-github.png"
            alt="logotipo degithub"
            className="logo w-16 h-16 p-3"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/marcelo-iglesia-3047b98b/"
          target="_blank"
        >
          {" "}
          <img
            src="linkedin.png"
            alt="logotipo linkedin"
            className="logo w-16 h-16 p-3"
          />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
