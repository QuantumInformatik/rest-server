const { response } = require('express');

const login = (req, res = response) => {

    res.json({
        mensaje: 'Login OK'
    })

}

module.exports = {
    login
}