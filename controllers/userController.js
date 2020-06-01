// let db = require("../database/models");

// let bcrypt = require("bcryptjs");

// let userController = {

//     // registro usuario 
//     registerUser: function(req, res) {
//         res.render("register");
//     },
//     // almacenar usuario
//     storeUser: function(req, res) {
        
//         let User = {
//             name: req.body.name,
//             email: req.body.email,
//             password: bcrypt.hashSync(req.body.password, 10),
//             birth_date: req.body.birth_date
//         }

//         // creo usuario
//         db.User.create(User)
//         .then(() => {
//             res.send("Usuario creado")
//         })
//     },

//     login: function(req, res) {
//         res.render('login')
//     }
// }

// module.exports = userController;