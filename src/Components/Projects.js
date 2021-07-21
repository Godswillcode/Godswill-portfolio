import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./projectData";

const Projects = () => {
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
        <div className="text-right p-link mb-2">
          <Link to="/allProjects">
            <span className="pr-1">View all</span>{" "}
            <svg
              className="mb-1"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
              />
            </svg>
          </Link>
        </div>

        <div className="d-flex justify-content-center flex-wrap">
          {projects.map((project) => {
            const { title, image, desc, technology, siteLink, id } = project;
            return (
              <div className="project-box" key={id} style={{ margin: 13 }}>
                <div className="project-imgBx">
                  <img src={image} alt="project" className="img-fluid" />
                </div>
                <div className="project-content">
                  <h2>{title}</h2>
                  <h3>
                    Technologies: <span>{technology}</span>
                  </h3>
                  <p className="text-left">{desc}</p>
                  <div className="d-flex justify-content-center mt-2 pt-4">
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
