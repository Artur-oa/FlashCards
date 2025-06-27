const DescCardService = require("../services/DescCard.service");
const formatResponse = require("../utils/formatResponse");

class DescCardController {
  static async getAll(req, res) {
    try {
      const result = await DescCardService.getAllDescCard();
      return res.status(200).json(formatResponse(200, "Все темы", result));
    } catch (error) {
      console.log(error);
      res.status(500).json(formatResponse(500, "Ошибка сервера"));
    }
  }

    static async getCardsByDeck(req, res) {
    try {
      const { id } = req.params;
      const cards = await CardService.getCardsByDeckId(id);
      const cardsWithOptions = cards.map((card) => ({
        id: card.id,
        question: card.question,
        options: JSON.parse(card.answer),
      }));
      res.json(cardsWithOptions);
    } catch (err) {
      res.status(500).json({
        message: "Ошибка при получении карточек колоды",
        error: err.message,
      });
    }
  }
}

module.exports = DescCardController;
