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
      className="container relative flex w-full flex-wrap  items-center justify-between 
     bg-slate-600 py-2 shadow-dark-strong dark:bg-neutral-700 lg:py-4 rounded"
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
    </nav>
  );
};
export default Navbar;
