// Import parts of the sequelize library
const {Model, DataTypes} =require('sequelize');
//Import database connection from config/connection.js
const sequelize = require('../config/connection');
//Initialize Category model(table) by extending Sequelize's Model class
class Category extends Model {}
//Set up fields and rules for Category model
Category.init(
    {
        //Define columns
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

module.exports = Category;