import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DecksPage.style.css";

export default function DecksPage() {
  const [decks, setDecks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/desccards")
      .then((res) => res.json())
      .then((data) => {
        setDecks(data.data || data);
      });
  }, []);

  const handleStartGame = (deckId) => {
    navigate(`/game/${deckId}`);
  };

  const userId = localStorage.getItem("userId");
  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div className="decks-page">
      {/* Декоративная шестерёнка */}
      <img
        src="https://cdn.pixabay.com/photo/2013/07/13/12/46/gear-146670_1280.png"
        alt="gear"
        className="decks-page-gear"
      />
      <h2 className="decks-page-title">Выберите колоду для игры</h2>
      <ul className="decks-list">
        {decks.map((deck) => (
          <li className="deck-item" key={deck.id}>
            <span className="deck-name">{deck.name_card || deck.name}</span>
            <button
              className="deck-play-btn"
              onClick={() => handleStartGame(deck.id)}
            >
              Играть
            </button>
          </li>
        ))}
      </ul>
      {userId && (
        <button className="logout-btn" onClick={handleLogout}>
          Выйти
        </button>
      )}
    </div>
  );
}
