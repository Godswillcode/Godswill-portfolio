import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="overlay d-flex justify-content-center align-items-center">
           <div className="main-info">
               <h1>Website development</h1>
               <Typed 
               className="typed-test"
               strings={['Website development', 'Web Design', 'Graphics Design' ]}
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
