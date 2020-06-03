var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');
var usersController = require('../controllers/usersController');


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