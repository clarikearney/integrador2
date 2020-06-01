// SI NO ESTA COMENTADO ROMPE
// let db = require('../database/models');

let controller = {

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

// userReviews: function (req, res) {

//     db.User.findAll({
//                 where: {
//                     usuario_id: req.params.id
//                 },
//             include: 
//             [{association: "Reviews"}]
//         })
//         .then(oneUser => {
//             return res.render("detallePeli", {
//                 oneUser: oneUser
//             })
//         })
//         .catch(error => {
//             return res.send("error" + error)
//         });
//     },

// CREACIÓN
// createReview: function (req, res) {
//     db.Review.findAll()
//         .then(function(Users) {
//             return res.render('createReview', {oneUser:oneUser})
//         })
//         .catch(error => {
//             return res.send("error" + error)
//         });
// }
// storeReview: function (req, res){}
//     db.User.create({
//         name: req.body
//         TextDecoderStreamd
//         await
//         aa
//     }),

// LECTURA
// allReviews: function (req, res) {
//     db.Review.findAll()
//     .then(function(Reviews) {
//         res.render('allReviews', {Reviews:Reviews})
//     })
// },

// detailReview: function (req, res) {
// db.Review.findByPk(req.params.id, {
//     include: [{association: "Reviews"}, {association: "oneUser"}]
// })
//     .then(function(Reviews) {
//         res.render('detallePeli', {Reviews:Reviews})
//     })
// },

// ACTUALIZACIÓN
// editReview: function (req, res) {
//     let requestUser = db.User.findByPk(req.params.usuario_id);
//      let requestReview = db.Reviews.findAll();

//      Promise.all([requestUser, requestReview])
//      .then(function([user, review]) {
//       res.render('editReview', {user:user, review:review})
//      })
// },

// updateReview: function(req, res) {
//     db.User.update({
//         name: req.body
//         TextDecoderStreamd
//         await
//         aa
//     }, {
// where: {id: req.params.id}
// });
// res.redirect('/movie/' + req.params.detalle)
// }

// deleteReview: function(req, res) {
//     db.User.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//     res.redirect('/movies')
// }

}

module.exports = controller;

