const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

class UsuarioService {

    async crearUsuario({ nombre, correo, password, rol }) {
        console.log('entra al services')

        const usuarioModel = new Usuario({ nombre, correo, password, rol });

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


    async actualizarUsuario(id, req) {
        console.log('Hola desde el service actualizar')
        const { _id, password, google, correo, ...resto } = req.body;

        if (password) {
            const salt = bcrypt.genSaltSync(10);
            resto.password = bcrypt.hashSync(password, salt);
        }
        const usuarioUp = await Usuario.findByIdAndUpdate(id, resto);
        console.log(usuarioUp)

        return {
            status: "200",
            usuarioUp
        }


    }

    async obtenerUsuarios(req) {
        console.log('Hola desde el service get')
        const condicion = { estado: true };

        const { limite = 6, desde = 0 } = req.query;

        const [total, usuarios] = await Promise.all([
            Usuario.countDocuments(condicion),
            Usuario.find(condicion)
            .skip(Number(desde))
            .limit(Number(limite))

        ])

        return {
            status: "200",
            total,
            usuarios
        }


    }

    async eliminarUsuarioFisicamente(req) {
        console.log('Hola desde el service eliminar')
        const { id } = req.params;
        const usuario = await Usuario.findByIdAndDelete(id);


        return {
            status: "200",
            usuario
        }


    }

    async eliminarUsuarioLogicamente(req) {
        console.log('Hola desde el service eliminar')
        const { id } = req.params;
        const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });


        return {
            status: "200",
            usuario
        }


    }

}

module.exports = UsuarioService