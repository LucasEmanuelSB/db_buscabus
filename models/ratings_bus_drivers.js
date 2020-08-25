const Sequelize = require("sequelize");

class Ratings_Bus_Drivers extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_bus_driver: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        id_user:{
          type: Sequelize.INTEGER,
          allowNull: false
        },
        rate:{
          type: Sequelize.DECIMAL(1,1),
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "ratings_bus_drivers",
      }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.bus_drivers, {
      foreignKey: "id_bus_driver",
      // as: "bus_driver",
    });
  }
  static associate(models) {
    this.hasOne(models.users, {
      foreignKey: "id_user",
      // as: "user",
    });
  }
}

module.exports = Ratings_Bus_Drivers;
