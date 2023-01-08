const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model {}

Dog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fixed: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        shared: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        medication: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        diet: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'dog',
    }
);

module.exports = Dog;