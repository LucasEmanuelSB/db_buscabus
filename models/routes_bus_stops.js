const Sequelize = require("sequelize");

class Routes_Bus_Stops extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        id_route:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        },
        id_bus_stop:{
          type: Sequelize.INTEGER,
          allowNull: false, 
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
