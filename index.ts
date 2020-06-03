import { SERVER_PORT } from "./global/environment";
import Server from "./classes/server";
import router from "./routes/router";
import bodyParser = require('body-parser');
import cors = require("cors");

const server = new Server();

// BodyParser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

//CORS
server.app.use( cors({origin: true, credentials: true}) );

//RUTAS DE SERVICIOS
server.app.use('/', router);

server.start(()=>{
        console.log(`Servidor corriendo en el puerto ${ SERVER_PORT }`);
});
