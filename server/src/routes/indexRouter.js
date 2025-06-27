const router = require("express").Router(); //* получаем экземпляр роутинга из библиотеки
const formatResponse = require("../utils/formatResponse"); //* подтягиваем утилиту для унификации ответа по 404
const userRouter = require("./user.routes");
const descCardRouter = require("./descCardRouter");
const gameRouter = require("./game.routes");
// здесь пишем routes
router.use("/users", userRouter);
router.use("/desccards", descCardRouter);
router.use("/game", gameRouter);
//! Обработка всех запросов на несуществующие маршруты (меняем стандартный ответ от express)
router.use((req, res) => {
  res.status(404).json(formatResponse(404, "Not found"));
});

module.exports = router;
