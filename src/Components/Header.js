import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper" id="header">
            <div className="overlay d-flex justify-content-center align-items-center">
           <div className="main-info container">
               <h1> I am Omenuko Godswill</h1>
               <Typed 
               className="typed-test"
               strings={['Web developer', 'Web Designer', 'Website Maintenance' ]}
               typeSpeed={50}
                backSpeed={60}
               loop
               />
               <a href="#!" className="btn-main-info">Contact Me</a>
            </div> 
        </div>
        </div>
    )
}

export default Header
