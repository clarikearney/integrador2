module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(45)
        },
        password: {
            type: DataTypes.STRING(45)
        },
        birthday: {
            type: DataTypes.DATE
        }
    };

    let config = {
        tableName: "T-users",
        underscored: true, 
        timestamps: true
    };

    const User = sequelize.define("User", cols, config);

    User.associate = function(modelos) {

    }

    return User;

}
