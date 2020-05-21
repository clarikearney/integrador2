module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            primaryKey: true
        },
        movie_id: {
            type: DataTypes.INTEGER(10),
        },
        user_id: {
            type: DataTypes.INTEGER(10)
        },
        reviewText: {
            type: DataTypes.STRING(45)
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes
        },
        rating: {
            type: DataTypes.DOUBLE
        }
    };

    let config = {
        tableName: "T-reviews",
        underscored: true, 
        timestamps: true
    };

    const Review = sequelize.define("Review", cols, config);

    Review.associate = function(modelos) {

    }

    return Review;

}
