const Sequelize = require("sequelize");

class Routes_Bus_Stops extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_route_bus_stop: {
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

  static associate(models) {
    this.belongsTo(models.routes, {
      foreignKey: "id_route",
      // as: "route",
    });
  }
  static associate(models) {
    this.belongsTo(models.bus_stops, {
      foreignKey: "id_bus_stop",
      // as: "bus_stop",
    });
  }
}

module.exports = Routes_Bus_Stops;
