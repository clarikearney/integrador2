var express = require('express');
var router = express.Router();
var controller = require('../controllers/moviesController');
var controllerRegister =require('../controllers/registerController');

router.get('/home', controller.home);
router.get('/detalle', controller.detail);
router.get('/generos', controller.genres);
router.get('/favoritas', controller.favorite);
router.get('/review', controller.movieReview);

// router.get("/register", userController.registerUser);
// router.post("/register", userController.storeUser);

module.exports = router;

