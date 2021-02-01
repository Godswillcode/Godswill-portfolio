import React from 'react'

const About = () => {
    return (
        <div className="about" id="about">
           <div className="container">
               <div className="sec-title-wrap text-center">
                    <h2>About Me</h2>
                    <div className="d-flex justify-content-center">
                    <div className="underline"></div>
                    </div>
               </div>

               <div className="row">
                   <div className="col-lg-6 mb-4">
                      <div className="about-img">
                          <img src="images/3.jpg" alt="about" className="img-fluid"/>
                      </div>
                   </div>
                   <div className="col-lg-6">
                       <div className="about-info text-white">
                           <h3>Hi Everyone</h3>
                           <p>I am a Web developer and designer based in Lagos, who loves clean, simple & unique design. and I also enjoy crafting and coding.</p>
                           <p>My approach is simple and iterative. I develop and design interactive strategies and experiences to help thrive your business.</p>
                       </div>
                       <div className="row mt-5">
                           <div className="col-lg-6 mb-3">
                                <div className="about-contact">
                                <h4>Name:</h4>
                                <span>Omenuko Godswill</span>
                                </div>
                                <div className="about-contact">
                                <h4>Phone:</h4>
                                <span><a href="tel: 09038968345">09038968345</a></span>
                                </div>
                           </div>
                           <div className="col-lg-6">
                           <div className="about-contact">
                                <h4>Profile:</h4>
                                <span>Front end developer</span>
                                </div>
                                <div className="about-contact">
                                <h4>Email:</h4>
                                <span><a href="mailto: omenukoonyekachi690@gmail.com">omenukoonyekachi690@gmail.com</a></span>
                                </div>
                               </div>
                       </div>
                       </div>
               </div>
            </div> 
        </div>
    )
}

export default About
