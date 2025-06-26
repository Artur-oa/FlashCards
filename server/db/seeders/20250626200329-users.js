'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Alice Example',
        email: 'alice@example.com',
        password: 'password123',
        score: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bob Demo',
        email: 'bob@example.com',
        password: 'password456',
        score: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Charlie Test',
        email: 'charlie@example.com',
        password: 'password789',
        score: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      email: [
        'alice@example.com',
        'bob@example.com',
        'charlie@example.com'
      ]
    }, {});
  }
};
