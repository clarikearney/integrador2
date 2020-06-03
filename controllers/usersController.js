let db = require("../database/models");
let op = db.Sequelize.Op;
const bcrypt = require('bcrypt');

let usersController = {

    searchForm: function (req,res){
        res.render ("searchUser");
    },
    searchUsersResult: function (req,res){
        //return res.send(req.query)
        db.User.findAll ({
            where:{
                [op.or]: {
                    name: {[op.like]: "%" + req.query.searchUser + "%"},
                    email: {[op.like]: "%" + req.query.searchUser + "%"}
                }
            }
        })
        .then (function (resultado){
            res.render ("searchUserResults", {
                users:resultado
            })
        })
    }, 
    searchById: function (req,res){
        db.User.findByPk(req.params.id)
        .then(function(usuario) {
            db.Review.findAll({
                where: {
                    usuario_id: usuario.id
                }
            })
            .then (function (reviews){
                res.render ("userDetail", {
                    user:usuario,
                    reviews:reviews
                })

            })
            
        })
    }
};

module.exports = usersController; 