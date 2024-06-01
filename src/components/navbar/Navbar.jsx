
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
    <nav className=" container navbar navbar-expand-lg bg-info shadow p-3 mb-1  rounded">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={linkMenu[0].to} className ="nav-link " aria-current="page" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={linkMenu[1].to} className="nav-link " >Currículum Médico</Link>
                </li>
                <li className="nav-item">
                  <Link to={linkMenu[2].to} className="nav-link" > Dearrollador web Full Stack
                </Link>
                </li>
              </ul>
            </div>
          </div>
    </nav>
  )
}
export default Navbar