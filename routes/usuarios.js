const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')
const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
} = require('../controllers/usuarios');
const role = require('../models/role');

const router = Router();



router.get('/', usuariosGet);

router.put('/:id', usuariosPut)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La password debe tener minimo 6 caracteres.').isLength({ min: 6 }),
    check('correo', 'Verificar el correo').isEmail(),
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(async(rol = '') => {
        const existeRol = await role.findOne({ rol });
        if (!existeRol) {
            throw new Error(`El rol ${rol} no está en base de datos`);
        }
    }),
    validarCampos

], usuariosPost)

router.delete('/', usuariosDelete)

module.exports = router;