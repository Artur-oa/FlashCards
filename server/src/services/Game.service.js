const { Card } = require("../../db/models");
const UserServise = require("./User.servise");

const GameService = {
  async checkAnswers(deckId, answers, userId) {
    const cardIds = answers.map((a) => a.cardId);
    const cards = await Card.findAll({
      where: { id: cardIds, desc_id: deckId },
    });
    let correctCount = 0;
    for (const userAnswer of answers) {
      const card = cards.find((c) => c.id === userAnswer.cardId);
      if (
        card &&
        card.variable_answer.trim().toLowerCase() ===
          userAnswer.answer.trim().toLowerCase()
      ) {
        correctCount++;
      }
    }
    if (userId) {
      await UserServise.addScore(userId, correctCount);
    }
    return { correctCount, total: answers.length };
  },
};

module.exports = GameService;
