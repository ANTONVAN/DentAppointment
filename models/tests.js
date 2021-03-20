module.exports = function(sequelize,DataTypes){

    var Tests = sequelize.define("Tests",{
        /* 
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            onDelete: 'cascade',
            onUpdate: 'cascade',
        }, */
        test_name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        test_cost:{
            type:DataTypes.INTEGER,
            allowNull: false,   
        },
        test_observations:{
            type:DataTypes.TEXT,
            allowNull: false, 
        }
    });

 
       /* Services.associate = function(models) {

            Services.hasOne(models.Appointments, {
              foreignKey: 'id', as : 'Appointment' 
            });
            Services.belongsTo(models.Patient, {
              foreignKey: 'id',  as : 'Patient' 
            });
        };
*/

            return Tests;

};