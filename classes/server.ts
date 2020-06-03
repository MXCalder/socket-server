import express = require('express');
import { SERVER_PORT } from "../global/environment";
import socketIO = require('socket.io');
import http = require("http");

export default class Server {
    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server( this.app );
        this.io = socketIO( this.httpServer );

        this.escucharSockets();
    }

    start( callback: VoidFunction ) {
        // this.app.listen( this.port, callback );
        this.httpServer.listen( this.port, callback );
    }

    private escucharSockets() {
        console.log('Escuchando conexiones - sockets');
        this.io.on("connection", cliente =>{
           console.log('Cliente conectado');
        });
    }
}
