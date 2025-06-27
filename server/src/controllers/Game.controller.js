const GameService = require("../services/Game.service");

class GameController {
  static async checkAnswers(req, res) {
    try {
      const { deckId, answers } = req.body;
      const result = await GameService.checkAnswers(deckId, answers);
      res.json(result);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Ошибка при проверке ответов", error: err.message });
    }
  }
}

module.exports = GameController;
