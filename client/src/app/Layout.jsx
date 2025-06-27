import { Outlet } from "react-router";
import "./Layout.style.css";

export default function Layout() {
  return (
    <>
      <header className="header">
        <h1>Game Card</h1>
        <Outlet />
      </header>
    </>
  );
}
