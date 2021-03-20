module.exports = function(sequelize,DataTypes){
    var Order = sequelize.define("Order",{
       /* id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            //onDelete: 'cascade',
            //onUpdate: 'cascade',
        },*/
        date_start:{
            type:DataTypes.DATE(6)
        },
        date_end:{
            type:DataTypes.DATE(6)
        },
        date_day:{
            type:DataTypes.DATEONLY
        },
        patient_id:{
            type:DataTypes.INTEGER
        },
        test_id:{
            type:DataTypes.INTEGER
        }

    });
    Order.associate = function(models) {
        Order.hasOne(models.Patient, {
          foreignKey: 'patient_id', as : 'Patient' 
        });

        Order.hasMany(models.Tests, {
            foreignKey: 'test_id', as : 'Test', allowNull:true
          });
        
    };

    


    return Order;
};