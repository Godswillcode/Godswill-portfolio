import React from "react";

function Services() {
  return (
    <div className="service" id="service">
      <div className="container">
        <div className="sec-title-wrap text-center">
          <h2>Services</h2>
          <div className="d-flex justify-content-center">
            <div className="underline"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="service-box">
              <div className="service-ico d-flex justify-content-center">
                <span className="ico-circle">
                  <i className="fa fa-laptop"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Design</h2>
                <p className="s-description text-center">
                  I help businesses reach their full potential on the web, equip
                  yourself with a cutting edge website built to fit your
                  business.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-box">
              <div className="service-ico d-flex justify-content-center">
                <span className="ico-circle">
                  <i className="fa fa-code"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Development</h2>
                <p className="s-description text-center">
                  I carry more than just good coding skill. My experience makes
                  me stand out from other web developers in Lagos.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="service-box">
              <div className="service-ico d-flex justify-content-center">
                <span className="ico-circle">
                  <i className="fa fa-tools"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Website maintenance</h2>
                <p className="s-description text-center">
                  Properly maintaining your site helps to ensure site security,
                  increase the number of visitors, boost returning traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
