const Models = require("../../models/index");
const response = require("../../utils/index");

const createController = async (req, res) => {
  try {
    const { name, address, price, capacity, openingHour, closingHour, longitude, latitude} = req.body;
    
      const parkingCreated = await Models.parking.create(
        name, address, price, capacity, openingHour, closingHour, longitude, latitude
      );

      response(res, 200, parkingCreated, "Parking creado con exito");
    
  } catch (error) {
    console.log(error);
    response(res, 500, error, "Error al crear parking");
  }
};

module.exports = createController;
