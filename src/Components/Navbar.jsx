import logo from "../Components/assets/img/logo.png";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav class="navbar navbar-light  menu">
      <div class="container-fluid">
        <img src={logo} alt="" className="logo" />

        <div className="d-flex gap-2">
          <div className="nav-item">
            <NavLink
              end
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/pokemones"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Pokemones
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
