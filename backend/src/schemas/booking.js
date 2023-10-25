
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Booking', {
        idBooking: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
        bookingDate: {
        type: DataTypes.DATE,
        allowNull: false,
        },
        status: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    });
    }