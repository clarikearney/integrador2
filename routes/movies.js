var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');
var usersController = require('../controllers/usersController');

router.get('/home', controller.home);
router.get('/detalle', controller.detail);
router.get('/generos', controller.genres);
router.get('/favoritas', controller.favorite);

router.post('/detalle', controller.create);

module.exports = router;

