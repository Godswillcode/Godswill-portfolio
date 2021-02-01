import React, { useState } from "react";

const Navbar = () => {
    const [click, setClick] = useState(true)
    function toggle() {
        setClick(!click)
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand text-white" href="#!">
            Godswill
          </a>
          <button
            className="navbar-toggler"
            onClick={toggle}
          >
           {click? <i className="fas fa-bars text-white"></i> : <i className="fas fa-times text-white"></i>}
          </button>

          <div className={click? "navbar-collapse collapse" : "navbar-collapse"}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" onClick={toggle}>
                <a className="nav-link active" href="#header">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item" onClick={toggle}>
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item" onClick={toggle}>
                <a className="nav-link" href="#service">
                  Services
                </a>
              </li>
              <li className="nav-item" onClick={toggle}>
                <a className="nav-link" href="#!">
                  Projects
                </a>
              </li>
              <li className="nav-item" onClick={toggle}>
                <a className="nav-link" href="#!">
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
