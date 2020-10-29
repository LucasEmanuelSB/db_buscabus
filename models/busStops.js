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
        adressId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          unique: true,
        },
        latitude: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        longitude: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "busStops",
      }
    );

    return this;
  }
  
  static associate(models) {

    this.belongsToMany(models.routes,{
      through: models.routesBusStops,
      foreignKey: 'busStopId',
      as: 'routes'
    })

    this.belongsTo(models.adresses, {
      foreignKey: 'adressId',
      as : 'adress',
    });

  }

}

module.exports = BusStops;
