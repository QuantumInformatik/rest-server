const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');


const login = async(req, res = response) => {
    const { correo, password } = req.body;


    let respuesta = { estado: 200, mensaje: "Login ok" };
    try {
        //verificar si el email existe
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            respuesta.estado = 400
            respuesta.mensaje = 'Usuario / password no son correctos -correo'
            return responder(res, respuesta)

        }



        //si el usuario está activo
        if (!usuario.estado) {
            respuesta.estado = 400
            respuesta.mensaje = 'Usuario / password no son correctos -estado false'
            return responder(res, respuesta)

        }

        //verificar la contraseña
        const validPassword = bcrypt.compareSync(password, usuario.password);
        if (!validPassword) {
            respuesta.estado = 400
            respuesta.mensaje = 'Usuario / password no son correctos -password'
            return responder(res, respuesta)

        }

        //generar jwt




    } catch (error) {
        res.status(500).json({
            mensaje: 'Hable con el admin'
        })
    }


}

const responder = (res, respuesta) => {
    console.log(respuesta)

    res.status(respuesta.estado).json({
        mensaje: respuesta.mensaje
    })
}

module.exports = {
    login
}