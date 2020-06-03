let db = require('./database/models')

let moduloLogin = {
    chequearUsuario: function (email) {
        return db.User.findOne({
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            return User != null;
        })
    },

    buscarPorEmail: function (email){
        return db.User.findOne({
            where: {
                email:email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, pass) {
        return db.User.findOne({
            where:{
                email:email,
                password: pass
            },
        })
        .then(results=>{
            return results;
        })
    }
}


module.exports = moduloLogin;