'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Carts',
      [
        {
          userId: 1,
          productId: 3,
          createdAt: Sequelize.fn('NOW'),
          updatedAt:  Sequelize.fn('NOW')
        },
        {
          userId: 2,
          productId: 1,
          createdAt: Sequelize.fn('NOW'),
          updatedAt:  Sequelize.fn('NOW')
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carts', null, {});
  },
};
