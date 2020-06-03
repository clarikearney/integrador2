let db = require('../database/models');

let controller = {

home: function (req, res) {
    res.render('home')
},
detail: function (req, res) {
    db.Review.findAll({
        include: ['oneUser']
    })
    .then(function(reviews) {
        return res.render('detallePeli', {reviews: reviews});
    })
},
genres: function (req, res) {
    res.render('generos')
},
favorite: function (req, res) {
    res.render('favoritas')
},
create: function (req, res) {
    
}

};

module.exports = controller;


