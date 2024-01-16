'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Categories', 'createdAt');
    await queryInterface.removeColumn('Categories', 'updatedAt');


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Categories', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },
};
