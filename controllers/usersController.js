let db = require("../database/models");

let bcrypt = require("bcryptjs");

let usersController = {

    searchForm: function (req,res){
        res.send ("searchUser");
    },
    searchUsersResult: function (req,res){

    }
};

module.exports = usersController;