import { useState } from "react";
import { projects } from "../Components/projectData";
import Aos from "aos";
import "aos/dist/aos.css";

const AllProject = () => {
  const [allProject, setAllProject] = useState(projects);

  const handleBtn = (e) => {
    let data = e.target.value;

    if (data === "All") {
      setAllProject(projects);
    } else if (data === "HTML") {
      const filtered = projects.filter((item) => item.kind === "HTML");

      setAllProject(filtered);
    } else if (data === "React") {
      const filtered = projects.filter((item) => item.kind === "React");

      setAllProject(filtered);
    } else if (data === "Mern") {
      const filtered = projects.filter((item) => item.kind === "Mern");

      setAllProject(filtered);
    }
  };

  return (
    <div
      className="project"
      style={{ paddingTop: "5rem", paddingBottom: "4rem" }}
    >
      <div className="container">
        <div className="allBtn">
          <button value="All" onClick={handleBtn}>
            All
          </button>
          <button value="HTML" onClick={handleBtn}>
            HTML
          </button>
          <button value="React" onClick={handleBtn}>
            React
          </button>
          <button value="Mern" onClick={handleBtn}>
            Mern Stack
          </button>
        </div>

        <div className="d-flex justify-content-center flex-wrap">
          {allProject.map((project) => {
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

export default AllProject;
