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
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "busDrivers",
      }
    );

    return this;
  }

  static associate(models){
    
    this.hasMany(models.buses,{
      foreignKey: 'busDriverId',
      sourceKey: 'id',
      as: 'buses'
    });

  }
}

module.exports = BusDrivers;
