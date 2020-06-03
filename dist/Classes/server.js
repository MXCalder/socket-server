"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var environment_1 = require("../global/environment");
var socketIO = require("socket.io");
var http = require("http");
var Server = (function () {
    function Server() {
        this.app = express();
        this.port = environment_1.SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.escucharSockets();
    }
    Object.defineProperty(Server, "instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    Server.prototype.start = function (callback) {
        // this.app.listen( this.port, callback );
        this.httpServer.listen(this.port, callback);
    };
    Server.prototype.escucharSockets = function () {
        console.log('Escuchando conexiones - sockets');
        this.io.on("connection", function (cliente) {
            console.log('Cliente conectado');
        });
    };
    return Server;
}());
exports.default = Server;
