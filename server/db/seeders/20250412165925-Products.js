'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Products', [{
  name: 'Манга "Патриотизм Мориарти" Том 9',
      image: 'https://static.insales-cdn.com/r/sfU-jFpB1Nw/rs:fit:440:0:1/q:100/plain/images/products/1/5555/882177459/large_9.png@webp',
      description:'«Патриотизм Мориарти» – вот как называется эта захватывающая история, где братья Мориарти становятся борцами за справедливость!',
      price: '1090',
      userId: '1',
      createdAt: Sequelize.fn('NOW'),
      updatedAt:  Sequelize.fn('NOW')
 },{
  name: 'Набор "Genshin Impact / Геншин"',
      image: 'https://static.insales-cdn.com/r/pUObgbeJPtg/rs:fit:1000:0:1/q:100/plain/images/products/1/1321/823256361/%D0%A1%D1%8F%D0%BE_%D0%BD%D0%B0_%D1%81%D0%B0%D0%B9%D1%82.jpg@webp',
      description:'Погрузись в мир Genshin Impact на концерте 2023! Набор включает в себя акриловую фигурку, акриловый брелок и значок.',
      price: '800',
      userId: '1',
      createdAt: Sequelize.fn('NOW'),
      updatedAt:  Sequelize.fn('NOW')
 },{
  name: 'Манга "SPY×FAMILY: Семья шпиона - Том 1"',
      image: 'https://static.insales-cdn.com/r/MzFWIYbdkOk/rs:fit:1000:1000:1/plain/images/products/1/1631/721921631/%D1%81%D1%881.webp@webp',
      description:'Добро пожаловать в мир шпионских приключений и семейных секретов! Представляем тебе самую завораживающую мангу',
      price: '345',
      userId: '2',
      createdAt: Sequelize.fn('NOW'),
      updatedAt:  Sequelize.fn('NOW')
 }],
  {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
