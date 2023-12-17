
//Importing sequelize
const Sequelize = require('sequelize');
//Setting up enviroment variables
require('dotenv').config();
//Connecting the database
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);
// Exporting sequelize
module.exports = sequelize;
