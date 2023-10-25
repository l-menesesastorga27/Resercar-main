const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Paid', {
        idPaid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
        amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        date: {
        type: DataTypes.DATE,
        allowNull: false,
        },
        paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    });
    }