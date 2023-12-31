const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Rol', {
        idRol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },
    });
    }
