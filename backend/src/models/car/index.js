const {  cars,
    createCars,
    updateCars,
    deleteCars } = require('./car.model');

module.exports = {
    list: async () => {
        return cars();
    },
    create: async (patent, brand, model) => {
        return createCars(patent, brand, model);
    },
    update: async (id, patent, brand, model) => {
        return updateCars(id, patent, brand, model);
    },
    delete: async (id) => {
        return deleteCars(id);
    }
};