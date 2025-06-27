"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "DescCards",
      [
        {
          name_card: "Челябинск",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name_card: "Огурчики", createdAt: new Date(), updatedAt: new Date() },
        { name_card: "Костыли", createdAt: new Date(), updatedAt: new Date() },
        { name_card: "Корея", createdAt: new Date(), updatedAt: new Date() },
        { name_card: "Тюмень", createdAt: new Date(), updatedAt: new Date() },
        { name_card: "Барнаул", createdAt: new Date(), updatedAt: new Date() },
        { name_card: "Обнинск", createdAt: new Date(), updatedAt: new Date() },
        { name_card: "Сочи", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "DescCards",
      {
        name_card: [
          "Челябинск",
          "Огурчики",
          "Костыли",
          "Корея",
          "Тюмень",
          "Барнаул",
          "Обнинск",
          "Сочи",
        ],
      },
      {}
    );
  },
};
