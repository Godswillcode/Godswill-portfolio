import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(true);

  function closeMenu() {
    setClick(!click);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink
            className="navbar-brand text-white"
            to="/"
           
          >
            Godswill
          </NavLink>
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
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="header"
                  spy={true}
                  offset={-80}
                  onClick={closeMenu}
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" spy={true} offset={-60} onClick={closeMenu}>
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="service" spy={true} offset={-80} onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="project" spy={true} offset={-50} onClick={closeMenu}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="skill" spy={true} offset={-50} onClick={closeMenu}>
                  Skills
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="about" spy={true} offset={-80} onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
