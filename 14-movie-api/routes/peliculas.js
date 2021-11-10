var express = require('express');
var router = express.Router();
const peliculasController = require('../controllers/peliculaController');

router.get('/', peliculasController.getPeliculas);
router.get('/:idPelicula', peliculasController.getPelicula);
router.post('/', peliculasController.createPelicula);
router.put('/:idPelicula', peliculasController.updatePelicula);
router.delete('/:idPelicula', peliculasController.deletePelicula);

module.exports = router;