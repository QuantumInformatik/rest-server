const { response } = require('express');
var jwt = require('jsonwebtoken');


const validarJwt = (req, res = response, next)=>{
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
       req.uid = uid;

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


