import { Outlet } from "react-router";
import "./Layout.style.css";

export default function Layout() {
  return (
    <>
      <header className="header">
        <h1>Flash Cards</h1>
       <p>Добро пожаловать на сервер</p>
       <h3>шизофрения</h3>
        <Outlet />
      </header>
    </>
  );
}
