const descCardRouter = require("express").Router();
const DescCardController = require("../controllers/DescCard.controller");

descCardRouter.get("/", DescCardController.getAll);
descCardRouter.get("/:id/cards", DescCardController.getCardsByDeck);

module.exports = descCardRouter;
