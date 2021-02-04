import React from "react";
import { projects } from "./projectData";

const Projects = () => {
  const projects1 = projects.map((project) => {
    const { title, image, desc, technology, siteLink, id } = project;
    return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4" key={id}>
        <div className="project-box card">
          <div className="project-imgBx">
            <img src={image} alt="project" className="img-fluid" />
          </div>
          <div className="project-content">
            <h2>{title}</h2>
            <h3>
              Technology: <span>{technology}</span>
            </h3>
            <p>{desc}</p>
            <div className="d-flex justify-content-center mt-5 pt-4">
              <a
                href={siteLink}
                className="project-btn"
                target="blank"
                rel="noopener noreferre"
              >
                View site
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  // Main return
  return (
    <div className="project" id="project">
      <div className="container">
        <div className="sec-title-wrap text-center">
          <h2>Projects</h2>
          <div className="d-flex justify-content-center">
            <div className="underline"></div>
          </div>
        </div>

        <div className="row">{projects1}</div>
      </div>
    </div>
  );
};

export default Projects;
