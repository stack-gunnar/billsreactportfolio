import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link>
          <img
            src={`${process.env.PUBLIC_URL}/Group 1.png`}
            alt="design"
          />
          </Link>
        </div>
        <div className="list-wrapper">
        <img
            src={`${process.env.PUBLIC_URL}/menu-bar.png`}
            alt="Menu Bar"
          />
          <img
            src={`${process.env.PUBLIC_URL}/menu-bar.png`}
            alt="Menu Bar"
          />

          <ul>
            <li>
              <Link
                to="/"
                // onClick={handleClose}
                // style={{ color: location.pathname === "/" && "4071fa"}}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                // onClick={handleClose}
                // style={{ color: location.pathname === "/about" && "4071fa"}}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                // onClick={handleClose}
                // style={{ color: location.pathname === "/skills" && "4071fa"}}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                // onClick={handleClose}
                // style={{ color: location.pathname === "/projects" && "4071fa"}}
              >
                Project
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
