
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Parking", {
        idParking: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
        bussinessName: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        address: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        pricePerHour: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        latitude: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        longitude: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        openingHour: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        closingHour: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        },
    });
    }