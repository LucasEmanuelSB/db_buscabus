const Sequelize = require("sequelize");

class Sensor extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        value: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "sensor",
      }
    );

    return this;
  }
}

module.exports = Sensor;
