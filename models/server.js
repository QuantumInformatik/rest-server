const express = require('express')


class Server {


    constructor() {
        this.app = express()
        this.puerto = process.env.PORT

        //Middlewares
        this.middlewares();

        //routes de mi app
        this.routes();

    }

    middlewares() {
        this.app.use(express.static('public'))
    }

    routes() {

        this.app.get('/api', (req, res) => {
            res.send('Hello World')
        })
    }

    listen() {
        this.app.listen(this.puerto, () => {
            console.log('servidor corriendo en ' + this.puerto)
        });
    }



}

module.exports = Server;