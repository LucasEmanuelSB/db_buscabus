const Sequelize = require("sequelize");

class RoutesBusStops extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        routeId:{
          type: Sequelize.INTEGER,
          primaryKey: true, 
        },
        busStopId:{
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "RoutesBusStops",
      }
    );

    return this;
  }
}

module.exports = RoutesBusStops;
