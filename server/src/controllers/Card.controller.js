 const { Card, DescCard } = require("../../db/models");

module.exports = {
  async getAll(req, res) {
    try {
      const cards = await Card.findAll({ include: DescCard });
      res.json(cards);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Ошибка при получении карточек", error: err.message });
    }
  },

  async getOne(req, res) {
    try {
      const card = await Card.findByPk(req.params.id, { include: DescCard });
      if (!card)
        return res.status(404).json({ message: "Карточка не найдена" });
      res.json(card);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Ошибка при получении карточки", error: err.message });
    }
  },

  async create(req, res) {
    try {
      const { question, answer, variable_answer, desc_id } = req.body;
      const newCard = await Card.create({
        question,
        answer,
        variable_answer,
        desc_id,
      });
      res.status(201).json(newCard);
    } catch (err) {
      res
        .status(400)
        .json({ message: "Ошибка при создании карточки", error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { question, answer, variable_answer, desc_id } = req.body;
      const card = await Card.findByPk(req.params.id);
      if (!card)
        return res.status(404).json({ message: "Карточка не найдена" });
      await card.update({ question, answer, variable_answer, desc_id });
      res.json(card);
    } catch (err) {
      res
        .status(400)
        .json({
          message: "Ошибка при обновлении карточки",
          error: err.message,
        });
    }
  },

  async delete(req, res) {
    try {
      const card = await Card.findByPk(req.params.id);
      if (!card)
        return res.status(404).json({ message: "Карточка не найдена" });
      await card.destroy();
      res.json({ message: "Карточка удалена" });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Ошибка при удалении карточки", error: err.message });
    }
  },
};
