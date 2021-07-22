import { projects } from "../Components/projectData";
const AllProject = () => {


  return (
    <div className="container" style={{marginTop:  '7rem'}}>
      <div className="btns">
        <button value="All">
          All
        </button>
        <button value="Apple">
          Iphone
        </button>
        <button value="Samsung">
          Samsung
        </button>
        <button value="lg">
          LG
        </button>
      </div>

           
    </div>
  );
};

export default AllProject;
