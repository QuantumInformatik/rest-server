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


module.exports={
    esAdminRole
}

