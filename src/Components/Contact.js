import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="sec-title-wrap text-center">
          <h2>Contact Me</h2>
          <div className="d-flex justify-content-center">
            <div className="underline"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Location:</h4>
                <p>No.2 corner bustop, sangotedo, Ajah Lekki Lagos</p>
              </div>

              <div className="email">
                <i className="far fa-envelope"></i>
                <h4>Email:</h4>
                <p>
                  {" "}
                  <a
                    href="mailto: omenukoonyekachi690@gmail.com"
                    className="text-white"
                  >
                    omenukoonyekachi690@gmail.com
                  </a>
                </p>
              </div>

              <div className="phone">
                <i className="fas fa-mobile-alt"></i>
                <h4>Call:</h4>
                <p>
                  <a href="tel: +234 903 896 8345" className="text-white">
                    +234 903 896 8345
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full name"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      rows="5"
                      id="message"
                      placeholder="Message"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
