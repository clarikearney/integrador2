var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');
// var userController =require('../controllers/userController');

router.get('/home', controller.home);
router.get('/detalle', controller.detail);
router.get('/generos', controller.genres);
router.get('/favoritas', controller.favorite);

// router.get('/reviews', controller.movieReview);

// CREACIÓN
// router.get('/create', controller.createReview);
// router.post('/create', controller.userReviews);

// LECTURA
// router.get('/reviews', controller.allReviews);
// router.get('/detalle', controller.detailReview);

// EDICIÓN / ACTUALIZACIÓN
// router.get('/edit/detalle', controller.editReview);
// router.post('/edit/detalle', controller.update);

// ELIMINAR
// router.post('/delete/detalle', controller.deleteReview)

// REGISTRO USUARIO
// router.get("/register", userController.registerUser);
// router.post("/register", userController.storeUser);

module.exports = router;

