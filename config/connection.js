//Importing Sequelize
const Sequelize = require('sequelize');
//Importing enviroment variables
require('dotenv').config();

let sequelize;

if (process.env.POSTGRES_STRING) {
    sequelize = new Sequelize(process.env.POSTGRES_STRING);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

//Exporting sequelize
module.exports = sequelize;
