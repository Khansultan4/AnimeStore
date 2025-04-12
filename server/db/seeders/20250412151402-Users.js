'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Users', [{
    username: 'sult',
    email: 'sult@sult',
    password: bcrypt.hashSync('123', 10),
    createdAt: Sequelize.fn('NOW'),
    updatedAt:  Sequelize.fn('NOW')
  },
  {
    username: 'biba',
    email: 'biba@biba',
    password: bcrypt.hashSync('123', 10),
    createdAt: Sequelize.fn('NOW'),
    updatedAt:  Sequelize.fn('NOW')
  }], {});

  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Users', null, {});
  }
};
