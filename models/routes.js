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
      through: models.itinerarys,
      // as: "itinerarys",
    });
  }
  static associate(models) {
    this.belongsToMany(models.bus_stops, {
      through: models.routes_bus_stops,
      // as: "routes_bus_stops",
      onDelete: 'CASCADE',
    });
  }  
}

module.exports = Routes;
