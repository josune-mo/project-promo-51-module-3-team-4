import { Link } from "react-router";

function BtnListProjects() {
  return (

    <div className="btnContainer">
      <Link to="/">
      <button className="btnNewProject">VER PROYECTOS</button>
      </Link>
    </div>
  );
}
export default BtnListProjects;