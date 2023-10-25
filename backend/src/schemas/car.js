const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Car", {
        idCar: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
        patent: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },
        brand: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        model: {
        type: DataTypes.STRING,
        allowNull: false,
        }
    });
    }