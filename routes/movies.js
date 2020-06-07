var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');
var usersController = require('../controllers/usersController');

router.get('/', controller.home);
router.get('/generos', controller.genres);
router.get('/favoritas', controller.favorite);
router.get('/buscador', controller.buscador);

router.get('/detalle/', controller.detail);
router.post('/detalle/', controller.create);

module.exports = router;

