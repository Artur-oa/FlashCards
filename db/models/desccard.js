"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DescCard extends Model {
    static associate(models) {
      this.hasMany(models.Card, { foreignKey: "desc_id" });
    }
  }
  DescCard.init(
    {
      name_card: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DescCard",
    }
  );
  return DescCard;
};
