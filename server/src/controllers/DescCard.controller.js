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
}

module.exports = DescCardController;
