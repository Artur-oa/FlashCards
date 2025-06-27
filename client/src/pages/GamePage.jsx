import { useEffect, useState } from "react";
import { useParams, useNavigate, data } from "react-router-dom";

import "./GamePage.style.css";
import { UserApi } from "../entities/UserApi";

export default function GamePage() {
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState({}); // { [cardId]: true/false }
  const [showFeedback, setShowFeedback] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`http://localhost:3000/api/desccards/${deckId}/cards`)
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, [deckId]);

  const handleChange = (option) => {
    setAnswers({ ...answers, [cards[step].id]: option });
    // Проверяем правильность локально (вариант хранится только на сервере, поэтому делаем запрос)
    fetch("http://localhost:3000/api/game/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        deckId: Number(deckId),
        answers: [{ cardId: cards[step].id, answer: option }],
        userId: Number(userId),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setFeedback({ ...feedback, [cards[step].id]: data.correctCount === 1 });
        setShowFeedback(true);
      });
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (step < cards.length - 1) {
      setStep(step + 1);
    } else {
      // Отправить все ответы на сервер
      const answerArr = cards.map((card) => ({
        cardId: card.id,
        answer: answers[card.id] || "",
      }));
      fetch("http://localhost:3000/api/game/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deckId: Number(deckId),
          answers: answerArr,
          userId: Number(userId),
        }),
      })
        .then((res) => res.json())
        .then((data) => setResult(data));
    }
    // const res = result.correctCount;
    // await UserApi.updateByID(res);
  };

  const handleGoToDecks = () => {
    navigate("/deck");
  };

  if (!cards.length) return <div>Загрузка...</div>;
  if (result)
    return (
      <div className="game-container">
        <h2>Результат</h2>
        <p>
          Правильных ответов: {result.correctCount} из {result.total}
        </p>
        <button className="game-next-btn" onClick={handleGoToDecks}>
          К выбору темы
        </button>
      </div>
    );

  return (
    <div className="game-container">
      <h2>
        Вопрос {step + 1} из {cards.length}
      </h2>
      <div className="game-question">{cards[step].question}</div>
      <div className="game-options">
        {cards[step].options.map((option, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name={`answer-${cards[step].id}`}
              value={option}
              checked={answers[cards[step].id] === option}
              onChange={() => handleChange(option)}
              disabled={showFeedback}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {showFeedback && (
        <div
          className={`game-feedback${feedback[cards[step].id] ? "" : " wrong"}`}
        >
          {feedback[cards[step].id] ? "Верно!" : "Неверно!"}
        </div>
      )}
      <button
        className="game-next-btn"
        onClick={handleNext}
        disabled={!showFeedback}
      >
        {step < cards.length - 1 ? "Далее" : "Завершить"}
      </button>
    </div>
  );
}
