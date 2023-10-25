const routerUser = require("express").Router();

const {user} = require("../../controllers/index");

routerUser.get("/listausuarios", user.getAll);
routerUser.post("/crearusuario", user.create);
routerUser.put("/actualizarusuario/:id", user.update);

module.exports = routerUser;