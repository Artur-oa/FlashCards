import { useState } from "react";
import "./userForm.style.css";
import { useNavigate } from "react-router-dom";
import { UserApi } from "../../entities/UserApi";
export default function UserForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !password.trim() || !email.trim()) {
      alert(`Поля должны быть все заполнены!`);
    }
    const newObj = {};
    newObj.name = name;
    newObj.email = email;
    newObj.password = password;
    //отправка в базу, но пока что консоль лог
    console.log(newObj);
    const user = await UserApi.create(newObj);
    console.log(user.score);
    setUser(user);
    setName("");
    setEmail("");
    setPassword("");
    navigate("/deck");
  };
  return (
    <>
      {user && <p> {user.name}</p>}
      <form onSubmit={submit} className="inputs">
        <input
          value={name}
          onChange={handleName}
          name="name"
          type="text"
          placeholder="name"
          required
          className="name"
        />
        <input
          value={email}
          onChange={handleEmail}
          name="email"
          type="email"
          placeholder="email"
          required
          className="email"
        />
        <input
          value={password}
          onChange={handlePassword}
          name="password"
          type="password"
          placeholder="password"
          required
          className="password"
        />
        <button type="submit">Отправить</button>
      </form>
    </>
  );
}
