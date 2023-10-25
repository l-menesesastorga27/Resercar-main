require("dotenv").config();
const { Sequelize  } = require('sequelize');
const credentials = require("../config/const");
const fs = require("fs");
const path = require("path");


const dbConnection = new Sequelize(credentials.dbName, credentials.dbUser, credentials.dbPass, {
    host: credentials.dbHost,
    port: credentials.dbPort,
    dialect: credentials.dbDialect,
    dialectOptions: credentials.sslOp
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "../schemas"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "../schemas", file)));
  });


modelDefiners.forEach((model) => model(dbConnection));
let entries = Object.entries(dbConnection.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
dbConnection.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Car, Paid, Booking, Rol, Parking } = dbConnection.models;

// Aca vendrian las relaciones
Rol.hasMany(User, { foreignKey: "idRol" });
User.belongsTo(Rol, { foreignKey: "idRol" });
Car.hasMany(User, { foreignKey: "idCar", as: "car" });
User.belongsTo(Car, { foreignKey: "idCar", as: "car" });


module.exports = {
  ...dbConnection.models, 
  conn: dbConnection, 
};