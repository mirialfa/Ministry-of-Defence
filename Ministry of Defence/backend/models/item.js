const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Item;
