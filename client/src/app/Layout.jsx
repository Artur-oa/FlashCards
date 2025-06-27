import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./Layout.style.css";

export default function Layout() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <nav
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <NavLink to="/" className="nav-link">
            Главная
          </NavLink>
          <NavLink to="/deck" className="nav-link">
            Колоды
          </NavLink>
          {!userId && (
            <NavLink to="/login" className="nav-link">
              Вход
            </NavLink>
          )}
          {!userId && (
            <NavLink to="/users" className="nav-link">
              Регистрация
            </NavLink>
          )}
          {userId && (
            <button onClick={handleLogout} className="nav-link">
              Выйти
            </button>
          )}
        </nav>
        <h1>Game Card</h1>
      </header>
      <Outlet />
    </>
  );
}
