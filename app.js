require('dotenv').config()
const express = require('express')
const app = express()

const puerto = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(puerto, () => {
    console.log('servidor corriendo en ' + puerto)
})