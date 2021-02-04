import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(true);

  function closeMenu() {
    setClick(!click);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link
            className="navbar-brand text-white"
            to="header"
            spy={true}
            offset={-70}
          >
            Godswill
          </Link>
          <button className="navbar-toggler" onClick={closeMenu}>
            {click ? (
              <i className="fas fa-bars text-white"></i>
            ) : (
              <i className="fas fa-times text-white"></i>
            )}
          </button>

          <div
            className={click ? "navbar-collapse collapse" : "navbar-collapse"}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" onClick={closeMenu}>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="header"
                  spy={true}
                  offset={-80}
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <Link className="nav-link" to="about" spy={true} offset={-80}>
                  About Me
                </Link>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <Link className="nav-link" to="service" spy={true} offset={-80}>
                  Services
                </Link>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <Link className="nav-link" to="project" spy={true} offset={-80}>
                  Projects
                </Link>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <Link className="nav-link" to="skill" spy={true} offset={-80}>
                  Skills
                </Link>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <a className="nav-link" href="mailto: omenukoonyekachi690@gmail.com">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
