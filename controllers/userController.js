let db = require("../database/models/index");

let bcrypt = require("bcryptjs");

let userController = {

    // register: function(req, res) {
    //     res.render("register");
    // },
    // store: function(req, res) {
    //     let User = {
    //         name: req.body.name,
    //         email: req.body.email,
    //         password: bcrypt.hashSync(req.body.password, 10),
    //         birth_date: req.body.birthday
    //     }

    //     db.User.create(User)
    //     .then(() => {
    //         res.send("Usuario creado")
    //     })
    // }


    // reseña del usuario
    reseñaDetalle: (req, res) => {
        console.log(req.params.id)
        db.User
        .findAll(
            {
                where: {
                    id: req.params.id
                },
            include: 
            {association: "resenas"}
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

module.exports = userController;