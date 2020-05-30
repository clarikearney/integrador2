// SI NO ESTA COMENTADO ROMPE
// let db = require('../database/models');
// let infoUser = require('../controllers/registerController');

let moviesController = {

home: function (req, res) {
    res.render('home')
},
detail: function (req, res) {
    res.render('detallePeli')
},
genres: function (req, res) {
    res.render('generos')
},
favorite: function (req, res) {
    res.render('favoritas')
},

movieReview: function (req, res) {

    db.Review.findAll(
            {
                where: {
                    usuario_id: req.params.id
                },
            include: 
            {association: "User"}
        })
        .then(User => {
            return res.render("detallePeli", {
                unUser: User
            })
        })
        .catch(error => {
            return res.send("error" + error)
        });

    }

}

module.exports = moviesController;

