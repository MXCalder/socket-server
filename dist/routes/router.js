"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/mensajes', function (req, res) {
    res.json({
        ok: true,
        mensaje: 'Todo está bien!'
    });
});
router.post('/mensajes', function (req, res) {
    res.json({
        ok: true,
        mensaje: 'POST - Listo'
    });
});
exports.default = router;
