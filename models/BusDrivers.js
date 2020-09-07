const Sequelize = require("sequelize");

class BusDrivers extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        averageRate:{
          type: Sequelize.DECIMAL,
          allowNull: true, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "BusDrivers",
      }
    );

    return this;
  }

  static associate(models){
    
    this.hasMany(models.Buses,{
      foreignKey: 'busDriverId',
      sourceKey: 'id',
      as: 'buses'
    });

    this.belongsToMany(models.Users,{
      through: models.UsersBusDrivers,
      foreignKey: 'busDriverId',
      as: 'usersRatings'
    });
  }
}

module.exports = BusDrivers;
