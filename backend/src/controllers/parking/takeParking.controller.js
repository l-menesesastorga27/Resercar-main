const Models = require("../../models/index");
const response = require("../../utils/index");

const takeParkingController = async (req, res) => {
  try {
    const { id } = req.params;
    const userUpdated = await Models.parking.take(id);
    if (userUpdated.message === "NotOk") {
      response(res, 400, userUpdated, "Parking no disponible");
      return;
    } else {
      response(res, 200, userUpdated, "Parking tomado con exito");
    }
  } catch (error) {
    console.log(error);
    response(res, 500, error, "Error al reservar parking");
  }
};

module.exports = takeParkingController;
