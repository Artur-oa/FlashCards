const userRouter = require("express").Router();
const UserController = require("../controllers/User.controller");

userRouter
  .get("/", UserController.getAll)
  .get("/:id", UserController.getById)
  .post("/", UserController.create)
  .put("/:id", UserController.updateById)
  .delete('/"id', UserController.deleteById);

module.exports = userRouter;
