const Usuario = require('../models/usuario');


class UsuarioService {

    async crearUsuario(usuario) {
        console.log('entra al services')
        const usuarioModel = new Usuario(usuario);
        await usuarioModel.save();

    }

}

module.exports = UsuarioService