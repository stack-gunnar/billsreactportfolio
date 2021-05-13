import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpen(true);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

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
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/close-round-line.png`}
            alt="Close Button"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left : open ? "0" : "-100vw" }}>
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
