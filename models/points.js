const Sequelize = require("sequelize");

class Points extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        latitude: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        longitude: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        id_route: {
          type: Sequelize.INTEGER,
          allowNull: true
        }
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "points",
      }
    );

    return this;
  }

}

module.exports = Points;