const { response } = require("express");


const esAdminRole = (req, res = response, next)=>{

    if(!req.usuarioAutenticado){
        return res.status(500).json({
            mensaje: 'se quiere verificar el role sin validar el token primero'
        })
    }

    const {rol, nombre} = req.usuarioAutenticado;

    if(rol!== 'ADMIN_ROLE'){
        return res.status(500).json({
            mensaje: `${nombre} no es administrador - no puede hacer esto`
        })
    }
    next();


}

const tieneRol = (...roles)=>{

    return (req, res = response, next)=>{
        console.log(roles)

        if(!req.usuarioAutenticado){
            return res.status(500).json({
                mensaje: 'se quiere verificar el role sin validar el token primero'
            })
        }

        if(!roles.includes(req.usuarioAutenticado.rol)){
            return res.status(401).json({
                mensaje: 'Acción no autorizada para su usuario.'
            })
        }

        next();
    }


}


module.exports={
    esAdminRole,
    tieneRol
}

