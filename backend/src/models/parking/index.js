const { parkings, createParking, updateParking, takeParking, freeParking } = require('./parking.model');

module.exports = {
    list: async () => {
        return parkings();
    },
    create: async (name, address, price, capacity, openingHour, closingHour, longitude, latitude) => {
        return createParking(name, address, price, capacity, openingHour, closingHour, longitude, latitude);
    },
    update: async (id, name, address, price, capacity, openingHour, closingHour) => {
        return updateParking(id, name, address, price, capacity, openingHour, closingHour);
    },
    take: async (id) => {
        return takeParking(id);
    },
    leave: async (id) => {
        return freeParking(id);
    }
};