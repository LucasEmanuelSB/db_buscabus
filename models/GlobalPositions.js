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
        modelName: "GlobalPositions",
      }
    );

    return this;
  }

  static associate(models) {

    this.hasOne(models.Buses, {
      foreignKey: 'globalPositionId',
      sourceKey: 'id',
      as: 'bus'
    });

    this.hasOne(models.Adresses, {
      foreignKey: 'globalPositionId',
      sourceKey: 'id',
      as: 'adress'
    });
  }

}

module.exports = GlobalPositions;
