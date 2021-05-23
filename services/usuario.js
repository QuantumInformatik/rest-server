const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

class UsuarioService {

    async crearUsuario({ nombre, correo, password, rol }) {
        console.log('entra al services')

        const usuarioModel = new Usuario({ nombre, correo, password, rol });

        // verificar si el correo existe
        const existeEmail = await Usuario.findOne({ correo });

        if (existeEmail) {
            return {
                mensaje: "Correo ya está en uso",
                status: "400",
                usuario: ""
            }
        }

        // encriptar contraseña
        const salt = bcrypt.genSaltSync(10);
        usuarioModel.password = bcrypt.hashSync(password, salt);


        //guardar en bd
        await usuarioModel.save();
        return {
            mensaje: "Creado con exito",
            status: "200",
            usuario: usuarioModel
        }

    }

}

module.exports = UsuarioService