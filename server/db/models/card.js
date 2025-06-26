"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      this.belongsTo(models.DescCard, { foreignKey: "desc_id" });
    }
  }
  Card.init(
    {
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      variable_answer: DataTypes.STRING,
      desc_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
