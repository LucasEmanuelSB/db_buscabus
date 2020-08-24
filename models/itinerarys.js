const Sequelize = require("sequelize");

class Itinerarys extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_itinerary: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        id_bus: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        id_route: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        date: {
          type: Sequelize.DATE,
          autoIncrement: true,
        },
        time: {
          type: Sequelize.TIME,
          autoIncrement: true,
        },
        id_start_adress:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        },
        id_end_adress:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "itinerarys",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.bus, {
      foreignKey: "id_bus",
      as: "bus",
    });
  }

  static associate(models) {
    this.belongsTo(models.routes, {
      foreignKey: "id_route",
      as: "route",
    });
  }
  static associate(models) {
    this.belongsTo(models.bus_stops, {
      foreignKey: "id_start_adress",
      as: "start_adress",
    });
  }

  static associate(models) {
    this.belongsTo(models.bus_stops, {
      foreignKey: "id_end_adress",
      as: "end_adress",
    });
  }
}

module.exports = Itinerarys;
