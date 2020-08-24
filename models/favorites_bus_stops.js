const Sequelize = require("sequelize");

class Favorites_Bus_Stops extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_favorite_bus_stop: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        id_user:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        },
        id_bus_stop:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        },
        description:{
          type: Sequelize.STRING,
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "favorites_bus_stops",
      }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.bus_stops, {
      foreignKey: "id_bus_stop",
      as: "bus_stop",
    });
  }

  static associate(models) {
    this.hasOne(models.users, {
      foreignKey: "id_user",
      as: "user",
    });
  }
}

module.exports = Favorites_Bus_Stops;
