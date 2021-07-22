import { useState } from "react";


import { projects } from "../Components/projectData";
const AllProject = () => {
 const [allProject, setAllProject] = useState(projects)

 const handleBtns = (e) => {
    let data = e.target.value;

    if (data === "All") {
      setPhones(info);
    } else if (data === "Apple") {
      const filtered = info.filter((item) => item.kind === "Apple");

      setPhones(filtered);
    } else if (data === "Samsung") {
      const filtered = info.filter((item) => item.kind === "Samsung");

      setPhones(filtered);
    } else if (data === "lg") {
      const filtered = info.filter((item) => item.kind === "lg");

      setPhones(filtered);
    }
  };


  return (
    <div className="project" style={{ paddingTop: "5rem" }}>
       <div className="container">
       <div className="btns">
        <button value="All">All</button>
        <button value="HTML">HTML</button>
        <button value="React">React</button>
        <button value="lg">LG</button>
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
