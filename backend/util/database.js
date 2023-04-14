const Sequelize = require('sequelize');

const db = new Sequelize('candy-shop', 'root', 'Gtr@vels123', {
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = db;
