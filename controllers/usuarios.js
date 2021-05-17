const { response } = require('express')


const usuariosGet = (req, res = response) => {
    const query = req.query;

    res.json({
        ok: true,
        mensaje: 'get Api - controller',
        query
    })
}

const usuariosPost = (req, res = response) => {
    const body = req.body;

    res.json({
        ok: true,
        mensaje: 'Post Api - controller',
        body: body
    })
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;

    res.json({
        ok: true,
        mensaje: 'put Api - controller',
        id: id
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