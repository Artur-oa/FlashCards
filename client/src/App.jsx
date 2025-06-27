import { Route, Routes } from "react-router";
import Layout from "./app/Layout";
import UserForm from "./pages/UserForm/userForm";
import GamePage from "./pages/GamePage";
import MainPages from "./pages/MainPages/MainPages";
import DecksPage from "./pages/DecksPage";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/deck" element={<DecksPage />} />
          <Route path="/" element={<MainPages />} />
          <Route path="/users" element={<UserForm />} />
          <Route path="/game/:deckId" element={<GamePage />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
