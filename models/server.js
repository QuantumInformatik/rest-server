const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');



class Server {


    constructor() {
        this.app = express()
        this.puerto = process.env.PORT

        //Conectar a base de datos
        this.conectarDb();

        this.usuariosPath = {
            endpoint: '/api/usuarios',
            path: '../routes/usuarios'
        };



        //Middlewares
        this.middlewares();

        //routes de mi app
        this.routes();

    }

    async conectarDb() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors())

        //lectura postman
        this.app.use(express.json())

        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath.endpoint, require(this.usuariosPath.path))

    }

    listen() {
        this.app.listen(this.puerto, () => {
            console.log('servidor corriendo en ' + this.puerto)
        });
    }



}

module.exports = Server;