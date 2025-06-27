import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const res = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok && data.id) {
      localStorage.setItem("userId", data.id);
      navigate("/deck");
    } else {
      setError(data.message || "Ошибка входа");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="inputs">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        required
        className="email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Пароль"
        required
        className="password"
      />
      <button type="submit">Войти</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
}
