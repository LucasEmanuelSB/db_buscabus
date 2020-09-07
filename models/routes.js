const Sequelize = require("sequelize");

class Routes extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "Routes",
      }
    );

    return this;
  }

  static associate(models){

    this.belongsToMany(models.BusStops,{
      through: models.RoutesBusStops,
      foreignKey: 'routeId',
      as: 'busStops'
    })

    this.hasMany(models.Itinerarys,{
      foreignKey: 'routeId',
      sourceKey: 'id',
      as: 'itinerarys'
    })

    this.hasMany(models.Points,{
      foreignKey: 'routeId',
      sourceKey: 'id',
      as: 'points'
    })
  }
  
}

module.exports = Routes;
