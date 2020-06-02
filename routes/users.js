var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');


router.get('/searchUser', usersController.searchForm);
// router.get('/searchUsersResult', usersController.searchUsersResult);


module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });