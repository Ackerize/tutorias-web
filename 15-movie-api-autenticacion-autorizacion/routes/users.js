var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/register', usuarioController.registrar);

router.post('/login', usuarioController.login);

module.exports = router;
