const Models = require("../../models/index");
const response = require("../../utils/index");

const updateController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, price, capacity, openingHour, closingHour } = req.body;
        const userUpdated = await Models.parking.update(id, name, address, price, capacity, openingHour, closingHour);
        response(res, 200, userUpdated, "Parking actualizado con exito")
    } catch (error) {
        console.log(error);
        response(res, 500, error, "Error al actualizar parking")
    }
}

module.exports = updateController;