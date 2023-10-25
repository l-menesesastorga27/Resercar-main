const Models = require("../../models/index");
const response = require("../../utils/index");

module.exports = async (req, res) => {
    const users = await Models.user.list();
    response(res, 200, users, "Lista de usuarios")
};