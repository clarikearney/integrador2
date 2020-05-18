let moviesController = {
home: function (req, res) {
    res.render('home')
},
detail: function (req, res) {
    res.render('detallePeli')
}
}
module.exports = moviesController;