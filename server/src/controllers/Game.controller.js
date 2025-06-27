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
//сервер:
// 1) сервис на запись score в таблицу User
// 2) контроллер, который обращается к этому сервису
// 3) роут, который обращается к методу контроллера
// клиент:
// 1) сетевой запрос на роут, который ведет к записи score  в таблицу User