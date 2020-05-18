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
}
}
module.exports = moviesController;