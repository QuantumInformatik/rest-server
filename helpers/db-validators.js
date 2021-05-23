const role = require('../models/role');


const esRolValido = async(rol = '') => {
    const existeRol = await role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está en base de datos`);
    }
}


module.exports = {
    esRolValido
}