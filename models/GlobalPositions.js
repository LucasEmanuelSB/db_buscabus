const Sequelize = require("sequelize");

class GlobalPositions extends Sequelize.Model {
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
      },
      {
        freezeTableName: true,
        timestamps: true,
        sequelize,
        modelName: "globalPositions",
      }
    );

    return this;
  }


}

module.exports = GlobalPositions;
