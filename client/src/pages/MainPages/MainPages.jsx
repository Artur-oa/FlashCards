import { NavLink } from "react-router-dom";
import "./MainPages.style.css";

export default function MainPages() {
  return (
    <nav>
      <NavLink to="/users" end className="nav-link">
        <h1>Регистрация</h1>
      </NavLink>
    </nav>
  );
}
