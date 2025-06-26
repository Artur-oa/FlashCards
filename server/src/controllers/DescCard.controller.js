const DescCardService = require("../services/DescCard.service");
const formatResponse = require("../utils/formatResponse");

class DescCardController {
  static async getAll() {
    try {
      constresult = await DescCardService.getAllDescCard();
      return res.status(200).json(formatResponse(200, "Все темы", result));
    } catch (error) {
      console.log(error);
      res.status(500).json(500, "Ошибка сервера");
    }
  }
}

module.exports = DescCardController;
