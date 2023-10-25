const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync();

const encriptado = (password) => bcrypt.hashSync(password, salt);

module.exports = encriptado;