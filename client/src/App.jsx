import { Route, Routes } from "react-router";
import Layout from "./app/Layout";
import UserForm from "./pages/UserForm/userForm";
import GamePage from "./pages/GamePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/users" element={<UserForm />} />
          <Route path="/game/:deckId" element={<GamePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
