const express = require("express");
const cors = require("cors");
var morgan = require("morgan");
const bodyParser = require("body-parser");
const { conn } = require("../database/database");
const { user, parking } = require("../routes/index")


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.basePath = "/api/v1";
        this.path = {            
            usuarios: `${this.basePath}/usuarios`,
            admin: `${this.basePath}/admin`,
            parking: `${this.basePath}/parking`
        }

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

         // Lectura y parseo del body
    this.app.use(bodyParser.urlencoded({ extended: false }));

        // Lectura y parseo del body
        this.app.use(express.json());

        // Morgan
        this.app.use(morgan("dev"));
    }

    routes() {
        this.app.use(this.path.usuarios, user );
        this.app.use(this.path.parking, parking );
        this.app.use(this.path.admin, require("../routes/admin/bulkRoles.route"));
    }

    listen() {
        conn.sync({ force: false }).then(() => {
          this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port);
          });
        });
      }

}

module.exports = Server;