const { response } = require('express')


const usuariosGet = (req, res = response) => {
    res.json({
        ok: true,
        mensaje: 'get Api - controller'
    })
}

const usuariosPost = (req, res = response) => {
    res.json({
        ok: true,
        mensaje: 'Post Api - controller'
    })
}

const usuariosPut = (req, res = response) => {
    res.json({
        ok: true,
        mensaje: 'put Api - controller'
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        mensaje: 'patch Api - controller'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        mensaje: 'delete Api - controller'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}