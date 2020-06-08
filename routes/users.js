var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.get('/list', usersController.getAll);
// formulario login
router.get('/reviews', usersController.logUser);
// proceso el login y redirecciono al listado de mis reseñas
router.post('/reviews', usersController.confirmUser);
// listado de mis reseñas
router.get('/reviews/:id', usersController.getReviews);

// formulario para editar reseña
router.get('/reviews/edit/:id', usersController.showEdit);
// proceso la edición de una reseña
router.post('/reviews/edit/:id', usersController.confirmEdit);

// Formulario para confirmar eliminación de reseña
router.get('/reviews/delete/:id', usersController.deleteReview);
// Proceso que confirma la eliminación
router.post('/reviews/delete/:id', usersController.confirmDelete);

router.get('/buscar', usersController.buscar);
router.post('/register', usersController.register);

router.get('/searchUser', usersController.searchForm);
router.get('/searchUsersResult', usersController.searchUsersResult);
router.get('/detail:id', usersController.searchById);


module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });