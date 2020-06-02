"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var environment_1 = require("../global/environment");
var Server = (function () {
    function Server() {
        this.app = express();
        this.port = environment_1.SERVER_PORT;
    }
    Server.prototype.start = function (callback) {
        this.app.listen(this.port, callback);
    };
    return Server;
}());
exports.default = Server;
