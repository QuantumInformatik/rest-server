const express = require('express')
const cors = require('cors')



class Server {


    constructor() {
        this.app = express()
        this.puerto = process.env.PORT
        this.usuariosPath = {
            endpoint: '/api/usuarios',
            path: '../routes/usuarios'
        };

        //Middlewares
        this.middlewares();

        //routes de mi app
        this.routes();

    }

    middlewares() {
        this.app.use(cors())
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