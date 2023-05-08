'use strict';
require('dotenv').config();

const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize( process.env.DB_DATABASE,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port : '3306'
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
