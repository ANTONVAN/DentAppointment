module.exports = function(sequelize,DataTypes){

    var User = sequelize.define("User",{

        first_name:{
            type:DataTypes.STRING
        },
        last_name:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        }

    });

    return User;

};