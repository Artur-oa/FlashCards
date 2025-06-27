const descCardRouter = require("express").Router();
const DescCardController = require("../controllers/DescCard.controller");

descCardRouter.get("/", DescCardController.getAll);

module.exports = descCardRouter;
