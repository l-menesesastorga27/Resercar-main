const Models = require("../../models/index");
const response = require("../../utils/index");
const { validarRut } = require("../../services/validar-rut");
const { generarJWT } = require("../../services/generar-jwt");

const createController = async (req, res) => {
  try {
    const { name, lastName, email, password, rol, rut } = req.body;
    if (!validarRut(rut)) {
      response(res, 400, "Error", "Rut invalido");
      return;
    } else {
      const userCreated = await Models.user.create(
        name,
        lastName,
        email,
        password,
        rol,
        rut
      );

      const token = await generarJWT(userCreated.idUser);

      userCreated.token = token;

      response(res, 200, userCreated, "Usuario creado con exito");
    }
  } catch (error) {
    console.log(error);
    response(res, 500, error, "Error al crear usuario");
  }
};

module.exports = createController;
