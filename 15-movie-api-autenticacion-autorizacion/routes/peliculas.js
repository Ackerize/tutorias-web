var express = require('express');
var router = express.Router();
const peliculasController = require('../controllers/peliculaController');
const auth = require('../middlewares/auth');

router.get('/', auth.verifyToken, peliculasController.getPeliculas);
router.get('/:idPelicula', auth.verifyToken, peliculasController.getPelicula);
router.get('/search/:titulo', auth.verifyToken, peliculasController.searchPelicula);
/* http://localhost:3001/api/v1/peliculas/search/palabra
*/
router.patch('/:idPelicula', auth.verifyToken, auth.isUser, peliculasController.calificarPelicula);

router.post('/', auth.verifyToken, auth.isAdmin, peliculasController.createPelicula);
router.put('/:idPelicula', auth.verifyToken, auth.isAdmin, peliculasController.updatePelicula);
router.delete('/:idPelicula', auth.verifyToken, auth.isAdmin, peliculasController.deletePelicula);

module.exports = router;