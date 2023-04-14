const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Items = sequelize.define('items', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  item_name: {
    type : Sequelize.STRING,
    allowNull : false
  },
  item_description: {
    type : Sequelize.STRING,
    allowNull : true
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Items;
