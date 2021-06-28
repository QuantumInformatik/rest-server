const  validarCampos  = require('../middlewares/validar-campos')
const  validarJwt = require('../middlewares/validar-jwt');
const validarRoles  = require('../middlewares/validar-roles');

module.exports={
    ...validarJwt,
    ...validarCampos,
    ...validarRoles
}