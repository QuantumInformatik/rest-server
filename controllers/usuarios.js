const { response } = require('express');
const UsuarioService = require('../services/usuario');
const usuarioService = new UsuarioService();




const usuariosGet = (req, res = response) => {
    //const query = req.query;

    usuarioService.obtenerUsuarios(req)
        .then((usuarios) => {
            res.json({
                usuarios: usuarios.usuarios
            })
        })

}

const usuariosPost = (req, res = response) => {
    const body = req.body;


    usuarioService.crearUsuario(body)
        .then((a) => {
            console.log("AAAA: " + a.mensaje)
            res.status(a.status).json({
                mensaje: a.mensaje,
                usaurio: a.usuario
            })
        })
        .catch((e) => {
            console.log("ERROR PERSO " + e)
            res.json({
                error: 'Creando usuario falló ' + e,
                body
            })
        });
}

const usuariosPut = async(req, res = response) => {
    const id = req.params.id;

    usuarioService.actualizarUsuario(id, req)
        .then((u) => {
            res.status(u.status).json({
                mensaje: 'put Api - controller',
                usuario: u.usuarioUp
            })
        });

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