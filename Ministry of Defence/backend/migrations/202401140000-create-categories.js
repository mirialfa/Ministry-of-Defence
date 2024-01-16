'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });

    // Insert predefined categories
    const predefinedCategories = [
      { name: 'מוצרי ניקיון'},
      { name: 'גבינות'},
      { name: 'ירקות ופירות'},
      { name: 'בשר ודגים'},
      { name: 'מאפים'},
    ];

    await queryInterface.bulkInsert('Categories', predefinedCategories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categories');
  },
};