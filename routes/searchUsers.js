var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');


router.get('/searchUsers', usersController.searchForm);
router.get('/searchUsersResult', usersController.searchUsersResult);

module.exports = router;