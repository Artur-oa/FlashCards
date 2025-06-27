import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      <h2>Выберите колоду для игры</h2>
      <ul>
        {decks.map((deck) => (
          <li key={deck.id}>
            {deck.name_card || deck.name}
            <button onClick={() => handleStartGame(deck.id)}>Играть</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
