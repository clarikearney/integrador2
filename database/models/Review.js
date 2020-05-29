module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            primaryKey: true
        },
        pelicula_id: {
            type: DataTypes.INTEGER(10),
        },
        usuario_id: {
            type: DataTypes.INTEGER(10)
        },
        resena: {
            type: DataTypes.STRING(45)
        },
        created_At: {
            type: DataTypes.DATE
        },
        updated_At: {
            type: DataTypes
        },
        puntaje: {
            type: DataTypes.DOUBLE
        }
    };

    let config = {
        tableName: "resenas",
        underscored: true, 
        timestamps: true
    };

    const Review = sequelize.define("Review", cols, config);

    Review.associate = function(models) {
        Review.belongsTo(models.User, {
            as: "User",
            foreignKey: "usuario_id:"
        });
    }

    return Review;

}
