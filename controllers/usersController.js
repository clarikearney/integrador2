let db = require("../database/models");
let op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

let usersController = {

        getAll: function(req, res) {
        db.User.findAll({
            include:[
                {association: 'Reviews'}
            ] 
        })
        .then(results => {
            let listado = results[0]
            res.render('usersList', {listado: listado})
        })
    },

    // REGISTER Y LOG IN
    buscar: function(req, res) {
        moduloLogin.chequearUsuario(req.query.email)
        .then(resultado => {
            res.send(resultado)
        })
        },
        register: function(req, res) {
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(req.body.password, salt);
    
            let user = {
                name: req.body.name,
                email: req.body.email,
                gender: req.body.gender,
                password: hash
            }
            db.User.findAll({
                where: [
                    {email: req.body.email}
                ]
            })
            .then(resultado => {
                console.log(req.body.email, resultado == undefined);
                if(!resultado) {
                    return res.render('registerError', {error: 'Email already taken!'})
                } else {
                    db.User.create(user)
                    return res.redirect('/')
                }
            })
        },
        logUser: function(req, res) {
            res.render('login', {tipo: 'log'});
        },
        confirmUser: function(req, res) {
            moduloLogin.validar(req.body.email, req.body.password)
            .then(resultado => {
                if(resultado == undefined) {
                    res.redirect('/users/reviews')
                } else {
                res.redirect('/users/reviews' + resultado.id)
                }})
            },
    
        // SI ESTA OK EL USUARIO MAIL Y CONTRASEÑA, TRAE LAS RESEÑAS DE ESE USUARIO
        getReviews: function(req, res) {
            db.Review.findAll({
                where: [
                    {usuario_id: req.params.id}
                ],
                include: [
                    {association: oneUser}
                ]
            })
            .then(resultado => {
                res.render('reviews', {resultado: resultado})
            })
        },
        showEdit: function(req, res) {
            db.Review.findAll({
                where: [
                    {id: req.params.id}
                ]
            })
            .then(resultado => {
                res.redner('editReview', {resultado: resultado})
            })
        },
        confirmEdit: function(req, res) {
            let updateReview = {
            resena: req.body.resena,
            puntaje: req.body.puntaje,
            id: req.body.id
        }
        db.Review.update({
            resena: updateReview.resena,
            puntaje: updateReview.puntaje
        }, {
            where: {
                id: updateReview.id
            }
        })
        .then(() => {
            db.Resena.findByPk(req.params.id)
            .then(resultado => {
                res.redirect('/users/reviews' + resultado.usuario_id)
            })
        })
    },
        deleteReview: function(req, res) {
            res.render('loginForReviewDelete', {deleteId: req.params.id});
        },
        confirmDelete: function (req, res) {
            moduloLogin.validar(req.body.email, req.body.password)
            .then(resultado => {
                if (resultado != null) {
                    db.Review.destroy({
                        where: {
                            id: req.params.id,
                        }
                    })
                    res.redirect('/users/reviews/');
                } else {
                    res.redirect('/users/reviews/delete/' + req.params.id)
                }
            })
        },
    

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
}



module.exports = usersController; 