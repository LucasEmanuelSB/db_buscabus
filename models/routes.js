const Sequelize = require("sequelize");

class Routes extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_route: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        route:{
          type: Sequelize.JSON,
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "routes",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.itinerarys, {
      through: "Itinerarys",
      as: "itinerarys",
    });
  }
   static associate(models) {
    this.belongsToMany(models.bus_stops, {
      through: "Routes_Bus_Stops",
      as: "routes_bus_stops",
      onDelete: 'CASCADE',
    });
  } 
}

module.exports = Routes;
