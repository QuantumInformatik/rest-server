const { response } = require('express');
var jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');


const validarJwt = async(req, res = response, next)=>{
    const token = req.header('Authorization');
    console.log(token)
    if(!token){
        return res.status(401).json({
            mensaje: 'Usuario no autenticado'
        });
    }

    try {
       const {uid} =  jwt.verify(token, process.env.SECRET_KEY);
       console.log(uid)

       //const usuario = await Usuario.findByIdAndDelete(id);
        const usuario = await Usuario.findById(uid);

          //si estado no es false
          if(!usuario){
            return res.status(404).json({
                mensaje: 'Usuario no existe en DB'
            }) 
        }


        //si estado no es false
        if(!usuario.estado){
            return res.status(401).json({
                mensaje: 'Usuario no autenticado - usuario eliminado'
            }) 
        }


        console.log(usuario)
        req.usuarioAutenticado = usuario;



        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({
            mensaje: 'Usuario no autenticado - token no válido'
        }) 
    }

}


module.exports={
    validarJwt
}


