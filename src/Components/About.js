import React from "react";

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
              <img src="images/about.jpg" alt="about" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-info text-white">
              <h3>Hi there</h3>
              <p>
                I am a Web developer and designer based in Lagos, who loves
                clean, simple {"&"} unique design. and I also enjoy crafting and
                coding.
              </p>
              <p>
                My approach is simple and iterative. I develop and design
                interactive strategies and experiences to help thrive your
                business.
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6 col-sm-6 mb-3">
                <div className="about-contact">
                  <h4>Name:</h4>
                  <span>Godswill Omenuko</span>
                </div>
                <div className="about-contact">
                  <h4>Phone:</h4>
                  <span>
                    <a href="tel: +234 903 896 8345">+234 903 896 8345</a>
                  </span>
                </div>

                <div className="about-contact">
                  <h4>Github:</h4>
                  <span>
                    <a
                      href="https://github.com/Godswillcode"
                      target="blank"
                      rel="noopener noreferre"
                    >
                      github.com/Godswillcode
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="about-contact">
                  <h4>Profile:</h4>
                  <span>Mern Stack developer</span>
                </div>
                <div className="about-contact">
                  <h4>Email:</h4>
                  <span>
                    <a href="mailto:amgodswill1@gmail.com">
                      amgodswill1@gmail.com
                    </a>
                  </span>
                </div>

                <div className="about-contact">
                  <h4>Linkedin:</h4>
                  <span>
                    {" "}
                    <a
                      href="https://www.linkedin.com/in/onyekachi-godswill-b78a631bb/"
                      rel="noopener noreferrer"
                      target="blank"
                      className="text-white"
                    >
                      onyekachi godswill
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
