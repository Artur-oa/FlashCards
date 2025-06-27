const GameService = require("../services/Game.service");

class GameController {
  static async checkAnswers(req, res) {
    try {
      const { deckId, answers, userId } = req.body;
      console.log("GameController.checkAnswers", { deckId, userId });
      const result = await GameService.checkAnswers(deckId, answers, userId);
      res.json(result);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Ошибка при проверке ответов", error: err.message });
    }
  }
}

module.exports = GameController;
