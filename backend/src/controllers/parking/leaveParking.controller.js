const Models = require("../../models/index");
const response = require("../../utils/index");

const leaveParkingController = async (req, res) => {
  try {
    const { id } = req.params;
    const parkingUpdated = await Models.parking.leave(id);
    response(res, 200, parkingUpdated, "Parking liberado con exito");
  } catch (error) {
    console.log(error);
    response(res, 500, error, "Error al liberar parking");
  }
};

module.exports = leaveParkingController;
