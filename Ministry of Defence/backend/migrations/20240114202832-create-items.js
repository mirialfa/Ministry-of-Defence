// migrations/YYYYMMDDHHMMSS-create-and-seed-items.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create Items table
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
    });

    // Add foreign key relationship
    await queryInterface.addConstraint('Items', {
      fields: ['categoryId'],
      type: 'foreign key',
      name: 'fk_category_id',
      references: {
        table: 'Categories',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    // Seed demo items
    const demoItems = [
      { name: 'סבון גוף', categoryId: 1 },
      { name: 'סבון כלים', categoryId: 1 },
      { name: 'שמפו ', categoryId: 1 },
      { name: 'מרכך ', categoryId: 1 },
      { name: 'אקנומיקה ', categoryId: 1 },
      { name: 'פנטסטיק ', categoryId: 1 },
      { name: 'סנו קליר', categoryId: 1 },
      { name: 'קוטג', categoryId: 2 },
      { name: 'גבינה צהובה', categoryId: 2 },
      { name: 'גבינה בולגרית', categoryId: 2 },
      { name: 'שוקו', categoryId: 2 },
      { name: 'מעדן', categoryId: 2 },
      { name: 'אפרסק', categoryId: 3 },
      { name: 'רימון', categoryId: 3 },
      { name: 'תות', categoryId: 3 },
      { name: 'עגבניה', categoryId: 3 },
      { name: 'ענבים', categoryId: 3 },
      { name: 'תפוז', categoryId: 3 },
      { name: 'מלפפון', categoryId: 3 },
      { name: 'מושט', categoryId: 4 },
      { name: 'סלומון', categoryId: 4 },
      { name: 'חזה', categoryId: 4 },
      { name: 'בקר', categoryId: 4 },
      { name: 'עוף', categoryId: 4 },
      { name: 'כבד', categoryId: 4 },
      { name: 'בורקס', categoryId: 5 },
      { name: 'רוגלה', categoryId: 5 },
      { name: 'פיציה', categoryId: 5 },
      { name: 'לחמניה', categoryId: 5 },
      { name: 'לחם', categoryId: 5 },
      { name: 'עוף', categoryId: 5 },


      // Add more demo items as needed
    ];

    await queryInterface.bulkInsert('Items', demoItems, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Code for reverting the migration (if needed)
    await queryInterface.dropTable('Items');
  },
};