"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("./global/environment");
var server_1 = require("./classes/server");
var router_1 = require("./routes/router");
var bodyParser = require("body-parser");
var server = new server_1.default();
// BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
server.app.use('/', router_1.default);
server.start(function () {
    console.log("Servidor corriendo en el puerto " + environment_1.SERVER_PORT);
});
