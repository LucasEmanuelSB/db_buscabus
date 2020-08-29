const Sequelize = require("sequelize");

class Routes_Bus_Stops extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_route:{
          type: Sequelize.INTEGER,
          primaryKey: true, 
        },
        id_bus_stop:{
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "routes_bus_stops",
      }
    );

    return this;
  }
}

module.exports = Routes_Bus_Stops;
