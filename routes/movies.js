var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');
// var userController =require('../controllers/userController');

router.get('/home', controller.home);
router.get('/detalle', controller.detail);
router.get('/generos', controller.genres);
router.get('/favoritas', controller.favorite);

module.exports = router;

