const Sequelize = require("sequelize");

class RealTimeData extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        latitude: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        longitude: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        velocity: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        nDevices: {
          type: Sequelize.INTEGER,
          allowNull: true,
        }
      },
      {
        freezeTableName: true,
        timestamps: true,
        sequelize,
        modelName: "realTimeData",
      }
    );

    return this;
  }


}

module.exports = RealTimeData;
