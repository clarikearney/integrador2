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

storeReview: function (req, res) {

    let Review = {
        email: req.body.email,
        text: req.body.comment,
        rating: req.body.rating,
        id_movie: req.body.movie
    }
    
    db.Review.findAll(
            {
                where: {
                    usuario_id: req.params.id
                },
            include: 
            {association: "User"}
        })
        .then(User => {
            return res.render("detalleUsuario", {
                User: User
            })
        })
        .catch(error => {
            return res.send("error" + error)
        });


}

}

module.exports = moviesController;