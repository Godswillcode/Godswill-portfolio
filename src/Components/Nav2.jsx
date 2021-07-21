import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav2 = () => {
  const [click, setClick] = useState(true);

  function closeMenu() {
    setClick(!click);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink className="navbar-brand text-white" to="/">
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
                <a className="nav-link" href="/#header" onClick={closeMenu}>
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about" onClick={closeMenu}>
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#service" onClick={closeMenu}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#project" onClick={closeMenu}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#skill" onClick={closeMenu}>
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about" onClick={closeMenu}>
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

export default Nav2;
