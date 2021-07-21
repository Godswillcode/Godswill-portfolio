import { Link } from "react-router-dom";

function Nav2() {
  return (
    <div className="nav2">
      <div className="container">
           <ul className="d-flex list-unstyled justify-content-around align-items-center py-2">
               <Link className="nav2-link" to="/">Godswill</Link>
               <Link className="nav2-link" to="/">HOME</Link>
           </ul>
          </div>
    </div>
  );
}

export default Nav2;
