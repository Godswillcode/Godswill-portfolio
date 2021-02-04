import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper" id="header">
      <div className="overlay d-flex justify-content-center align-items-center">
        <div className="main-info container">
          <h1> I am Omenuko Godswill</h1>
          <Typed
            className="typed-test"
            strings={["Web developer", "Web Designer", "Website Maintenance"]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
          <a
            href="https://drive.google.com/file/d/1Ld3wMfD0nHwRJNZsAbdqzBI29yC8QS2m/view?usp=sharing"
            className="btn-main-info"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
