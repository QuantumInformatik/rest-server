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
            res.json({
                ok: true,
                mensaje: 'get Api'
            })
        })

        this.app.put('/api', (req, res) => {
            res.json({
                ok: true,
                mensaje: 'put Api'
            })
        })

        this.app.post('/api', (req, res) => {
            res.json({
                ok: true,
                mensaje: 'post Api'
            })
        })

        this.app.delete('/api', (req, res) => {
            res.json({
                ok: true,
                mensaje: 'delete Api'
            })
        })
    }

    listen() {
        this.app.listen(this.puerto, () => {
            console.log('servidor corriendo en ' + this.puerto)
        });
    }



}

module.exports = Server;