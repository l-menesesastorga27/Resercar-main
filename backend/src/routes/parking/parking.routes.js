const routerParking = require("express").Router();

const { parking } = require("../../controllers/index");

routerParking.get("/list", parking.getAll);
routerParking.post("/crear", parking.create);
routerParking.put("/actualizar/:id", parking.update);
routerParking.put("/take/:id", parking.take);
routerParking.put("/leave/:id", parking.leave);

module.exports = routerParking;