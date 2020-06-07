let db = require('../database/models');
let moduloLogin = require('../modulo-login');

let controller = {

home: function (req, res) {
    res.render('home')
},

buscador: function (req, res) {
    res.render('buscador')
},

genres: function (req, res) {
    res.render('generos')
},
favorite: function (req, res) {
    res.render('favoritas')
},

detail: function (req, res) {
    db.Review.findAll({
        include: ['oneUser']
    })
    .then((reviews)=> {
        res.render('detallePeli', {
            pelicula_id: req.query.pelicula_id,
            reviews: reviews});
    })
},

create: function (req, res) {
moduloLogin.validar(req.body.email, req.body.password)
.then(function(usuario) {
    if(usuario != undefined) {
        db.Review.create({
            pelicula_id: req.body.usuario_id,
            usuario_id: usuario.id,
            resena: req.body.resena,
            puntaje: req.body.puntaje,
        })
        .then(function() {
            res.redirect('/movies/detalle/?pelicula_id' + req.body.pelicula_id);
        })
     }  else {
            res.send('Error')
        }
    }

)}

}; 

module.exports = controller;

