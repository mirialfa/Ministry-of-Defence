// models/index.js
const Category = require('./category');
const Item = require('./item');

Item.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Item, { foreignKey: 'categoryId', sourceKey: 'id' });

module.exports = {
  Category,
  Item,
};

