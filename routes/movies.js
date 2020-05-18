var express = require('express');
var router = express.Router();
var controller = require('../controllers/moviesController');

router.get('/detalle', controller.detail)
router.get('/', controller.home)
router.get('generos', controller.genres)
router.get('favoritas', controller.favorite)


module.exports = router;
