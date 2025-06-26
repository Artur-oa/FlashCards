const UserServise = require("../services/User.servise");
const formatResponse = require("../utils/formatResponse");
const User = require("../../db/models");

class UserController {
  static async viewMainPage(req, res) {
    try {
      const users = await UserServise.getAll();
      if (users.length === 0) {
        return res.status(200).json(formatResponse(200, "Данных нет", []));
      }
      const viewData = users.map((el) => el.get());

      return res.send(`
         <form action="/api/users" method="POST">
      <input name="name" type="text" required placeholder="name" />
      <input name="email" type="email" required placeholder="email" />
      <input name="password" type="password" required placeholder="password" />
      <input name="score" type="text" required placeholder="score" />
      <button type="submit">Создать</button>
    </form> 
        <div style='display:flex;align-items:center;gap:20px;'>
        ${viewData.map(
          (el) => `
          <div style='display:flex;align-items:center;gap:10px;flex-direction:column;'>
          <p>${el.name}</p>
          <p>${el.email}</p>
          <p>${el.password}</p>
          <p>${el.score}</p>
          </div>
          `
        )}
        </div>
        `);
    } catch ({ message }) {
      console.log(`=================UserController.getAll===========`, message);
      res
        .status(500)
        .json(formatResponse(500, "Внутренняя ошибка сервера", null, message));
    }
  }

  static async getAll(req, res) {
    try {
      const users = await UserServise.getAll();
      if (users.length === 0) {
        return res.status(200).json(formatResponse(200, "Данных нет", []));
      }
      return res
        .status(200)
        .json(formatResponse(200, "Данные успешно получены", users));
    } catch ({ message }) {
      console.log(`================UserController.getAll==========`, message);
      res
        .status(500)
        .json(formatResponse(500, "Внутренняя ошибка сервера", null, message));
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    if (isNaN(id))
      return res
        .status(400)
        .json(
          formatResponse(
            400,
            "Невалидный id Пользователя",
            null,
            "Невалидный id Пользователя"
          )
        );
    try {
      const user = await UserServise.getById(id);
      if (!user) {
        return res
          .status(404)
          .json(
            formatResponse(
              404,
              "Пользователь не найден",
              null,
              "Пользователь не найден"
            )
          );
      }
      return res
        .status(200)
        .json(
          formatResponse(
            200,
            `Данные по пользователю с id: ${id} успешно получены`,
            user
          )
        );
    } catch ({ message }) {
      console.log(
        `==================UserController.getByID==============`,
        message
      );
      res
        .status(500)
        .json(formatResponse(500, "Внутренняя ошибка сервера", null, message));
    }
  }
  static async create(req, res) {
    const { isValid, error } = User.validate(req.body);
    if (!isValid) {
      return res.status(400).json(formatResponse(400, error, null, error));
    }
    try {
      const newUser = await UserServise.create(req.body);
      if (!newUser)
        return res
          .status(400)
          .json(
            formatResponse(
              400,
              "Не удалось создать запись пользователя в бд",
              null,
              "Не удалось создать запись пользователя в бд"
            )
          );
      return res.redirect("/");
    } catch ({ message }) {
      console.log("=============UserController.create=============", message);
      res
        .status(500)
        .json(formatResponse(500, "Внутренняя ошибка сервера", null, message));
    }
  }

  static async updateById(req, res) {
    const { id } = req.params;
    if (isNaN(id))
      return res
        .status(400)
        .json(
          formatResponse(
            400,
            "Невалидный id пользователя",
            null,
            "Невалидный id пользователя"
          )
        );
    const { isValid, error } = User.validate(req.body);
    if (!isValid) {
      return res.status(400).json(formatResponse(400, error, null, error));
    }
    try {
      const updatedUser = await UserServise.updateById(id, req.params);
      if (!updatedUser)
        return res
          .status(404)
          .json(
            formatResponse(
              404,
              "Не удалось найти запись по пользователю в бд",
              null,
              "Не удалось найти запись по пользователю в бд"
            )
          );
      return res
        .status(200)
        .json(
          formatResponse(
            200,
            `Запись пользователя с id ${id} изменена`,
            updatedUser
          )
        );
    } catch ({ message }) {
      console.log(`===============UserController.update===========`, message);
      res
        .status(500)
        .json(formatResponse(500, "Внутренняя ошибка сервера", null, message));
    }
  }
  static async deleteById(req, res) {
    const { id } = req.params;
    if (isNaN(id))
      return res
        .status(400)
        .json(
          formatResponse(
            400,
            "Невалидный id пользователя",
            null,
            "Невалидный id пользователя"
          )
        );
    try {
      const deletedUser = await UserServise.deleteById(id);
      if (!deletedUser)
        return res
          .status(404)
          .json(
            formatResponse(
              404,
              "не удалось найти запись в бд",
              null,
              "не удалось найти запись в бд"
            )
          );
      return res
        .status(200)
        .json(
          formatResponse(
            200,
            `Пользователь успешно удален с id ${id}`,
            deletedUser
          )
        );
    } catch ({ message }) {
      console.log(`=================UserController.delete==========`, message);
      res
        .status(500)
        .json(formatResponse(500, "Внутренняя ошибка сервера", null, message));
    }
  }
}
module.exports = UserController;
