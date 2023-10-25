const Models = require("../../models/index");
const response = require("../../utils/index");

module.exports = async (req, res) => {
    const parking = await Models.parking.list();
    response(res, 200, parking, "Lista de parkings")
};