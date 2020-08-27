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
}

module.exports = Connections;
