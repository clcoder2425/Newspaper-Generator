//Importing sequelize library
const { Model, DataTypes } = require('sequelize');
//Importing database connection from config/connection.js
const sequelize = require('../config/connection');
//Initialize News model(table) by extending Sequelize's model class
class News extends Model { }

//Setting up fields and rules for News model
News.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
            },

        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,

        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'news',
    }
);
module.exports = News;