const Sequelize = require("sequelize");

class Connections extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        id_bus:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        },
        device_adress: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        time_connection: {
          type: Sequelize.TIME,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "connections",
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.bus, {
      foreignKey: "id_bus",
      // as: "bus",
    });
  }

  static associate(models) {
    this.belongsTo(models.persons, {
      foreignKey: "device_adress",
      // as: "device_connected_adress",
    });
  }
}

module.exports = Connections;
