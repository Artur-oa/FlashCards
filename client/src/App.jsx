import { Route, Routes } from "react-router";
import Layout from "./app/Layout";
import UserForm from "./pages/UserForm/userForm";
import GamePage from "./pages/GamePage";
import MainPages from "./pages/MainPages/MainPages";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPages />} />
          <Route path="/users" element={<UserForm />} />
          <Route path="/game/:deckId" element={<GamePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
