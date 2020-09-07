const Sequelize = require("sequelize");

class BusStops extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        isTerminal: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        latitude: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        longitude: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        adressId: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "BusStops",
      }
    );

    return this;
  }
  
  static associate(models) {

    this.belongsToMany(models.Routes,{
      through: models.RoutesBusStops,
      foreignKey: 'busStopId',
      as: 'routes'
    })

    this.belongsTo(models.Adresses, {
      foreignKey: 'adressId',
      as : 'adress',
    });

  }

}

module.exports = BusStops;