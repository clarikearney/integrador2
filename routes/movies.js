var express = require('express');
var router = express.Router();
var controller = require('../controllers/moviesController');

router.get('/detalle', controller.detail)
router.get('/', controller.home)


module.exports = router;
