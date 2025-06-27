const { Card } = require("../../db/models");

const CardService = {
  async getAll() {
    return Card.findAll();
  },
  
  async getOne(id) {
    return Card.findByPk(id);
  },

  async create(data) {
    return Card.create(data);
  },

  async update(id, data) {
    const card = await Card.findByPk(id);
    if (!card) return null;
    return card.update(data);
  },

  async delete(id) {
    const card = await Card.findByPk(id);
    if (!card) return null;
    await card.destroy();
    return true;
  },
};

module.exports = CardService;
