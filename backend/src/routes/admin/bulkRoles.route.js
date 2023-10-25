const { insertRoles } = require("../../config/createRolesDb");

const routerAdmin = require("express").Router();

routerAdmin.get("/bulkroles", (req, res) => {
    insertRoles();
    res.send("Roles creados");
});

module.exports = routerAdmin;