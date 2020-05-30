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

    let Review = {
        // email: req.body.email,
        resena: req.body.resena,
        puntaje: req.body.puntaje,
        pelicula_id: req.body.pelicula_id,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at
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
            return res.render("detallePeli", {
                User: User
            })
        })
        .catch(error => {
            return res.send("error" + error)
        });

    }

}

module.exports = moviesController;

