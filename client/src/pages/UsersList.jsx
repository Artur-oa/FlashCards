import { useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        // сортировка по score по убыванию
        const sorted = (data.data || data).sort((a, b) => b.score - a.score);
        setUsers(sorted);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ошибка загрузки пользователей");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="users-steampunk-list">Загрузка...</div>;
  if (error) return <div className="users-steampunk-list">{error}</div>;

  return (
    <div
      className="users-steampunk-list"
      style={{
        maxWidth: 600,
        margin: "40px auto",
        background: "linear-gradient(135deg, #3a2f1b 60%, #7c5c2b 100%)",
        borderRadius: 18,
        boxShadow: "0 8px 32px rgba(44,34,18,0.7), 0 0 0 6px #b08d57 inset",
        border: "4px solid #b08d57",
        padding: 32,
        position: "relative",
        color: "#e6c07b",
        fontFamily: "Cinzel, serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#e6c07b",
          textShadow: "0 2px 8px #2c1d0e",
          borderBottom: "2px solid #b08d57",
          paddingBottom: 12,
          marginBottom: 28,
          fontSize: "2rem",
          letterSpacing: 2,
        }}
      >
        Таблица гениев
      </h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "none",
        }}
      >
        <thead>
          <tr style={{ color: "#b08d57", fontSize: "1.1rem" }}>
            <th style={{ textAlign: "left", padding: "8px 0" }}>#</th>
            <th style={{ textAlign: "left", padding: "8px 0" }}>Имя</th>
            <th style={{ textAlign: "left", padding: "8px 0" }}>Очки</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user.id} style={{ borderBottom: "1px dashed #b08d57" }}>
              <td style={{ padding: "8px 0", color: "#e6c07b" }}>{idx + 1}</td>
              <td style={{ padding: "8px 0", color: "#e6c07b" }}>
                {user.name}
              </td>
              <td
                style={{ padding: "8px 0", color: "#e6c07b", fontWeight: 700 }}
              >
                {user.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{ position: "absolute", top: -30, right: -30, opacity: 0.15 }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2013/07/13/12/46/gear-146670_1280.png"
          alt="gear"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
}
