const Sequelize = require("sequelize");

class Bus_Drivers extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
         id_bus:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        }, 
        average_rate:{
          type: Sequelize.DECIMAL(1,1),
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "bus_drivers",
      }
    );

    return this;
  }

  static associate(models){
    this.hasMany(models.bus,{
      foreignKey: 'id_bus_driver',
      sourceKey: 'id',
      as: 'bus'
    })
  }

  static associate(models){
    this.belongsToMany(models.users,{
      through: models.users_bus_drivers,
      foreignKey: 'id_bus_driver',
      as: 'users_ratings'
    });
  }
}

module.exports = Bus_Drivers;
