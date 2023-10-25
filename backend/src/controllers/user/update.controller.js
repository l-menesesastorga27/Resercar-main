const Models = require("../../models/index");
const response = require("../../utils/index");

const updateController = async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.body;
        const userUpdated = await Models.user.update(id, email);
        response(res, 200, userUpdated, "Usuario actualizado con exito")
    } catch (error) {
        console.log(error);
        response(res, 500, error, "Error al actualizar usuario")
    }
}

module.exports = updateController;